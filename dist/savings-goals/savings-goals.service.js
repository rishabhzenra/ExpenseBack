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
exports.SavingsGoalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const savings_goal_entity_1 = require("./savings-goal.entity");
let SavingsGoalsService = class SavingsGoalsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(userId) {
        return this.repo.find({ where: { userId }, order: { createdAt: 'DESC' } });
    }
    async findOne(id, userId) {
        const goal = await this.repo.findOne({ where: { id, userId } });
        if (!goal)
            throw new common_1.NotFoundException('Goal not found');
        return goal;
    }
    create(userId, dto) {
        const goal = this.repo.create({ ...dto, userId });
        return this.repo.save(goal);
    }
    async update(id, userId, dto) {
        const goal = await this.findOne(id, userId);
        Object.assign(goal, dto);
        return this.repo.save(goal);
    }
    async deposit(id, userId, amount) {
        const goal = await this.findOne(id, userId);
        goal.current = Number(goal.current) + amount;
        if (goal.current > goal.target)
            goal.current = goal.target;
        return this.repo.save(goal);
    }
    async remove(id, userId) {
        const goal = await this.findOne(id, userId);
        return this.repo.remove(goal);
    }
};
exports.SavingsGoalsService = SavingsGoalsService;
exports.SavingsGoalsService = SavingsGoalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(savings_goal_entity_1.SavingsGoal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SavingsGoalsService);
//# sourceMappingURL=savings-goals.service.js.map