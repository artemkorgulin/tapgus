"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundsService = void 0;
var common_1 = require("@nestjs/common");
var RoundsService = /** @class */ (function () {
    function RoundsService() {
    }
    RoundsService.prototype.get = function () {
        return [
            { name: 'Round 1', country: 'Moscow' },
            { name: 'Round 2', country: 'Piter' },
            { name: 'Round 3', country: 'Bavaria' },
            { name: 'Round 4', country: 'Huston' },
            { name: 'Round 5', country: 'Mexico' }
        ];
    };
    RoundsService.prototype.getRound = function (param) {
        return param;
    };
    RoundsService.prototype.create = function (req) {
        return req.body;
    };
    RoundsService.prototype.update = function (req, param) {
        return { body: req.body, param: param };
    };
    RoundsService.prototype.delete = function (param) {
        return param;
    };
    RoundsService = __decorate([
        (0, common_1.Injectable)()
    ], RoundsService);
    return RoundsService;
}());
exports.RoundsService = RoundsService;
