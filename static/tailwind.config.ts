import { Config } from 'tailwindcss/types/config';
import defaultColors from 'tailwindcss/colors';

const header1stHeight = '6rem';
const header2stHeight = '2.75rem';
const headerSumHeight = `calc(${header1stHeight} + ${header2stHeight})`;
const contentFullHeight = `calc(100% - ${headerSumHeight})`;

export const colors = {
    primary: '#192027', // Dark
    secondary: '#AEBAC0',
    tertiary: '#2D3842',
    gray: '#E4EAED',
    grayLight: '#F8F9FA',
    blue: '#29BEE9',
    blueLight: '#38CDF9',
    flower: '#B288E7',
    white: '#FFFFFF',
    milk: '#F9FAFB',
    green: '#16D26C',
    dynamicsDown: '#DA495B',
    red: '#DA495B',
    radar_self: '#17B2DE',
    radar_boss: '#DE17CA',
    radar_mate: '#27DE17',
} as const;

export type Colors = typeof colors;
export type DefaultColors = typeof defaultColors;

/** @type {import('tailwindcss').Config} */
const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                sidebar: '216px',
                header1stHeight,
                header2stHeight,
                headerSumHeight,
                contentFullHeight,
            },
            colors,
            content: {
                box: '""',
            },
            fontSize: {
                sm: ['0.813rem', '150%'], // 13px
                base: ['0.875rem', '100%'], // 14px
                h1: ['2.75rem', '2.75rem'], // 44px
                h2: ['2.125rem', '3rem'], // 34px
                h3: ['1.5rem', '3rem'], // 24px
            },
            boxShadow: {
                border: 'inset 0 0 0 1px', // used in app-border-inner
                card: '0 4px 16px 0 rgba(25, 32, 39, 0.08)', // primary color
            },
            keyframes: {
                append: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                appendY: {
                    from: { transform: 'scaleY(0)' },
                    to: { transform: 'scaleY(1)' },
                },
            },
            animation: {
                append: 'append .15s ease-in-out',
                appendY: 'appendY .3s ease-in-out',
            },
            transitionDuration: {
                base: '300ms',
            },
        },
        fontFamily: {
            primary: ['Oswald', 'sans-serif'],
            secondary: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
};

export default config;
