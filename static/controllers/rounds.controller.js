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
exports.RoundsController = void 0;
var common_1 = require("@nestjs/common");
var rounds_service_1 = require("../services/rounds.service");
var RoundsController = /** @class */ (function () {
    function RoundsController(roundsService) {
        this.roundsService = roundsService;
    }
    RoundsController.prototype.getRounds = function () {
        return this.roundsService.get();
    };
    RoundsController.prototype.getRound = function (param) {
        return this.roundsService.getRound(param);
    };
    RoundsController.prototype.store = function (req) {
        return this.roundsService.create(req);
    };
    RoundsController.prototype.update = function (req, param) {
        return this.roundsService.update(req, param);
    };
    RoundsController.prototype.delete = function (param) {
        return this.roundsService.delete(param);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RoundsController.prototype, "getRounds", null);
    __decorate([
        (0, common_1.Get)('/:userId'),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RoundsController.prototype, "getRound", null);
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Req)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RoundsController.prototype, "store", null);
    __decorate([
        (0, common_1.Patch)('/:userId'),
        __param(0, (0, common_1.Req)()),
        __param(1, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RoundsController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(),
        __param(0, (0, common_1.Param)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RoundsController.prototype, "delete", null);
    RoundsController = __decorate([
        (0, common_1.Controller)('api/rounds'),
        __metadata("design:paramtypes", [rounds_service_1.RoundsService])
    ], RoundsController);
    return RoundsController;
}());
exports.RoundsController = RoundsController;
