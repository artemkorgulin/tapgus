"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("../controllers/app.controller");
var user_module_1 = require("./user.module");
var auth_module_1 = require("./auth.module");
var rounds_module_1 = require("./rounds.module");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var path_1 = require("path");
var token_middleware_1 = require("../middlewares/token.middleware");
require('dotenv').config();
var _a = process.env, TYPEORM_HOST = _a.TYPEORM_HOST, TYPEORM_USERNAME = _a.TYPEORM_USERNAME, TYPEORM_PASSWORD = _a.TYPEORM_PASSWORD, TYPEORM_DATABASE = _a.TYPEORM_DATABASE, TYPEORM_PORT = _a.TYPEORM_PORT;
var AppModule = /** @class */ (function () {
    function AppModule(dataSource) {
        this.dataSource = dataSource;
    }
    AppModule.prototype.configure = function (consumer) {
        consumer
            .apply(token_middleware_1.TokenMiddleware)
            .forRoutes({ path: 'tapgus', method: common_1.RequestMethod.GET });
    };
    AppModule = __decorate([
        (0, common_1.Module)({
            controllers: [
                app_controller_1.AppController,
            ],
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: TYPEORM_HOST,
                    port: Number(TYPEORM_PORT),
                    username: TYPEORM_USERNAME,
                    password: TYPEORM_PASSWORD,
                    database: TYPEORM_DATABASE,
                    entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                }),
                user_module_1.UserModule,
                auth_module_1.AuthModule,
                rounds_module_1.RoundsModule,
            ]
        }),
        __metadata("design:paramtypes", [typeorm_2.DataSource])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
