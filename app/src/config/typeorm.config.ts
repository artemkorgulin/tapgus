import { ConfigModule, ConfigService } from '@nestjs/config';
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import {config as dotenvConfig} from "dotenv";

dotenvConfig({ path: '.env' });

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: process.env.TYPEORM_HOST,
            port: Number(process.env.TYPEORM_PORT) || 5432,
            database: process.env.TYPEORM_DATABASE,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            entities: ["src/entities/**/*.entity{.ts,.js}"],
            migrations: [
                "src/database/migrations/*{.ts,.js}",
                'src/database/seeders/*{.ts,.js}'
            ],
            autoLoadEntities: true,
            synchronize: true,
            logging: false,
        };
    },
};