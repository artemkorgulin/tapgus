import { Module} from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserModule } from "./user.module";
import { AuthModule } from "./auth.module";
import { RoundsModule } from "./rounds.module";
import { GameModule } from "./game.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from "../config/typeorm.config";

@Module({
    controllers: [
        AppController,
    ],
    imports: [
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        AuthModule,
        UserModule,
        RoundsModule,
        GameModule,
    ]
})

export class AppModule {}