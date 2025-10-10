import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `${process.env.TYPEORM_HOST}`,
    port: `${process.env.TYPEORM_PORT}`,
    username: `${process.env.TYPEORM_USERNAME}`,
    password: `${process.env.TYPEORM_PASSWORD}`,
    database: `${process.env.TYPEORM_DATABASE}`,
    entities: ["src/entities/**/*.entity{.ts,.js}"],
    migrations: [
        "src/database/migrations/*{.ts,.js}",
        'src/database/seeders/*{.ts,.js}'
    ],
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);