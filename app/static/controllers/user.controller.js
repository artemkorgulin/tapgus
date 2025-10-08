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
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var user_service_1 = require("../services/user.service");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.getUsers = function () {
        return this.userService.get();
    };
    UserController.prototype.getUser = function (param) {
        return this.userService.getUser(param);
    };
    UserController.prototype.store = function (req) {
        return this.userService.createUser(req);
    };
    UserController.prototype.update = function (req, param) {
        return this.userService.update(req, param);
    };
    UserController.prototype.delete = function (param) {
        return this.userService.delete(param);
    };
    UserController.prototype.tapguss = function (param) {
        return this.userService.tap(param);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getUsers", null);
    __decorate([
        (0, common_1.Get)('/:userId'),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "getUser", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "store", null);
    __decorate([
        (0, common_1.Patch)('/:userId'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "delete", null);
    __decorate([
        (0, common_1.Post)('tapguss'),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "tapguss", null);
    UserController = __decorate([
        (0, common_1.Controller)('api/user'),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
