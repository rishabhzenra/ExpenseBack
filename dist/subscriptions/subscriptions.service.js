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
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subscription_entity_1 = require("./subscription.entity");
let SubscriptionsService = class SubscriptionsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(userId) {
        return this.repo.find({ where: { userId }, order: { createdAt: 'DESC' } });
    }
    async findOne(id, userId) {
        const sub = await this.repo.findOne({ where: { id, userId } });
        if (!sub)
            throw new common_1.NotFoundException('Subscription not found');
        return sub;
    }
    create(userId, dto) {
        const sub = this.repo.create({ ...dto, userId });
        return this.repo.save(sub);
    }
    async update(id, userId, dto) {
        const sub = await this.findOne(id, userId);
        Object.assign(sub, dto);
        return this.repo.save(sub);
    }
    async remove(id, userId) {
        const sub = await this.findOne(id, userId);
        return this.repo.remove(sub);
    }
    async getAnalytics(userId) {
        const subs = await this.repo.find({ where: { userId, status: 'active' } });
        const monthlyTotal = subs.reduce((sum, s) => {
            const amt = Number(s.amount);
            if (s.billingCycle === subscription_entity_1.BillingCycle.YEARLY)
                return sum + amt / 12;
            if (s.billingCycle === subscription_entity_1.BillingCycle.WEEKLY)
                return sum + amt * 4.33;
            if (s.billingCycle === subscription_entity_1.BillingCycle.QUARTERLY)
                return sum + amt / 3;
            return sum + amt;
        }, 0);
        return {
            totalActive: subs.length,
            monthlyTotal: Math.round(monthlyTotal * 100) / 100,
            yearlyTotal: Math.round(monthlyTotal * 12 * 100) / 100,
        };
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.Subscription)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map