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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("../services/auth.service");
var jwt_1 = require("@nestjs/jwt");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.token = function (param) {
        return this.authService.getToken(param.email);
    };
    AuthController.prototype.login = function (res) {
        var token;
        token = this.authService.generateTokenJwt(jwt_1.JwtModule.register({
            secretOrPrivateKey: process.env['PRIVATE_KEY'],
            secret: process.env['PRIVATE_KEY'],
            signOptions: { expiresIn: process.env['PRIVATE_EXPIRE_IN'] },
        }), String(process.env['PRIVATE_EXPIRE_IN']));
        res.cookie('token', token.access_token, {
            expires: new Date(new Date().getTime() + Number(process.env['PRIVATE_COOKIE_DAY']) * 1000),
            sameSite: 'strict',
            httpOnly: false,
            secure: false
        });
        return {
            success: true,
            message: 'success'
        };
    };
    AuthController.prototype.logout = function (res) {
        // Some internal checks
        res.cookie('token', '', { expires: new Date() });
    };
    __decorate([
        (0, common_1.Get)('token'),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "token", null);
    __decorate([
        (0, common_1.Post)('login'),
        __param(0, (0, common_1.Res)({ passthrough: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "login", null);
    __decorate([
        (0, common_1.Get)('logout'),
        __param(0, (0, common_1.Res)({ passthrough: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "logout", null);
    AuthController = __decorate([
        (0, common_1.Controller)('api/auth'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
