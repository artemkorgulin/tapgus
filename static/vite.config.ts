import react from '@vitejs/plugin-react-swc';
import path from 'path';
import {
    defineConfig,
    splitVendorChunkPlugin,
    UserConfig,
    loadEnv,
} from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
    const ENV = loadEnv(mode, process.cwd());

    const isProduction = mode === 'production';
    const productionPlugins = isProduction
        ? [splitVendorChunkPlugin()]
        : [mkcert()];

    const BASE_LEGACY_API_URL_4_REGEX = ENV.VITE_BASE_LEGACY_API_URL.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&',
    );

    const server = isProduction
        ? {}
        : {
              host: 'localhost',
              port: 9999,
              cors: true,
              proxy: {
                  [ENV.VITE_BASE_LEGACY_API_URL]: {
                      target: ENV.VITE_BASE_LEGACY_API_URL_DEV_PROXY,
                      changeOrigin: true,
                      rewrite: (path: string) =>
                          path.replace(
                              new RegExp(`^${BASE_LEGACY_API_URL_4_REGEX}`),
                              '',
                          ),
                      secure: false,
                  },
                  [ENV.VITE_BASE_API_URL]: {
                      target: ENV.VITE_BASE_API_URL_DEV_PROXY,
                      changeOrigin: true,
                      secure: false,
                  },
              },
          };

    const analyze = Boolean(process.env.ANALYZE);
    const extraPlugins = analyze
        ? [
              (await import('rollup-plugin-visualizer')).visualizer({
                  open: true,
                  gzipSize: true,
                  sourcemap: true,
                  template: 'treemap',
              }),
          ]
        : [];

    return {
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: analyze,
        },
        plugins: [
            react(),
            tsconfigPaths(),
            svgr(),
            imagetools(),
            ...productionPlugins,
            ...extraPlugins,
        ],
        server,
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler' // or "modern"
                },
            },
        },
    };
});
