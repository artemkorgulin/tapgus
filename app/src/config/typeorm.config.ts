import { ConfigModule, ConfigService } from '@nestjs/config';
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import {config as dotenvConfig} from "dotenv";
import * as path from 'path';
import { DataSource } from 'typeorm';

dotenvConfig({ path: '.env' });

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: process.env.TYPEORM_HOST,
            port: Number(process.env.TYPEORM_PORT) || 5432,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            autoLoadEntities: true,
            entities: [
                path.resolve(`${__dirname}/../../../static/entities/**.entity{.ts,.js}`)
            ],
            synchronize: true,
            logging: true,
        };
    },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        path.resolve(`${__dirname}/../../../static/entities/**.entity{.ts,.js}`)
    ],
    migrations: [
        path.resolve(`${__dirname}/../../../static/database/migrations/*{.ts,.js}`),
        path.resolve(`${__dirname}/../../../static/database/seeders/*{.ts,.js}`)
    ],
    synchronize: true,
    logging: false,
};

export const config = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        path.resolve(`${__dirname}/../../../static/entities/**.entity{.ts,.js}`)
    ],
    migrations: [
        path.resolve(`${__dirname}/../../../static/database/seeders/*{.ts,.js}`)
    ],
    migrationsTableName: 'seeders',
    logging: true,
    synchronize: false
});