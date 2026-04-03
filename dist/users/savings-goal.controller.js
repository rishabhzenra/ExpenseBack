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
exports.SavingsGoalController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const savings_goal_entity_1 = require("../users/savings-goal.entity");
const passport_1 = require("@nestjs/passport");
let SavingsGoalController = class SavingsGoalController {
    goalsRepository;
    constructor(goalsRepository) {
        this.goalsRepository = goalsRepository;
    }
    async findAll(req) {
        return this.goalsRepository.find({ where: { userId: req.user.id } });
    }
    async create(req, data) {
        const goal = this.goalsRepository.create({ ...data, userId: req.user.id });
        return this.goalsRepository.save(goal);
    }
    async update(req, id, data) {
        await this.goalsRepository.update({ id, userId: req.user.id }, data);
        return this.goalsRepository.findOne({ where: { id, userId: req.user.id } });
    }
    async remove(req, id) {
        return this.goalsRepository.delete({ id, userId: req.user.id });
    }
};
exports.SavingsGoalController = SavingsGoalController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SavingsGoalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SavingsGoalController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], SavingsGoalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SavingsGoalController.prototype, "remove", null);
exports.SavingsGoalController = SavingsGoalController = __decorate([
    (0, common_1.Controller)('savings-goals'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, typeorm_1.InjectRepository)(savings_goal_entity_1.SavingsGoal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SavingsGoalController);
//# sourceMappingURL=savings-goal.controller.js.map