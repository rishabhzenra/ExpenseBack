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
exports.InvestmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const investment_entity_1 = require("./investment.entity");
let InvestmentsService = class InvestmentsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(userId) {
        return this.repo.find({ where: { userId }, order: { createdAt: 'DESC' } });
    }
    async findOne(id, userId) {
        const inv = await this.repo.findOne({ where: { id, userId } });
        if (!inv)
            throw new common_1.NotFoundException('Investment not found');
        return inv;
    }
    create(userId, dto) {
        const inv = this.repo.create({ ...dto, userId, currentValue: dto.currentValue ?? dto.investedAmount });
        return this.repo.save(inv);
    }
    async update(id, userId, dto) {
        const inv = await this.findOne(id, userId);
        Object.assign(inv, dto);
        return this.repo.save(inv);
    }
    async remove(id, userId) {
        const inv = await this.findOne(id, userId);
        return this.repo.remove(inv);
    }
    async getPortfolioSummary(userId) {
        const investments = await this.repo.find({ where: { userId, isActive: true } });
        const totalInvested = investments.reduce((s, i) => s + Number(i.investedAmount), 0);
        const totalCurrent = investments.reduce((s, i) => s + Number(i.currentValue), 0);
        const totalGain = totalCurrent - totalInvested;
        const gainPct = totalInvested > 0 ? (totalGain / totalInvested) * 100 : 0;
        const byType = {};
        for (const inv of investments) {
            if (!byType[inv.type])
                byType[inv.type] = { invested: 0, current: 0, count: 0 };
            byType[inv.type].invested += Number(inv.investedAmount);
            byType[inv.type].current += Number(inv.currentValue);
            byType[inv.type].count++;
        }
        return { totalInvested, totalCurrent, totalGain, gainPct, count: investments.length, byType };
    }
};
exports.InvestmentsService = InvestmentsService;
exports.InvestmentsService = InvestmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(investment_entity_1.Investment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvestmentsService);
//# sourceMappingURL=investments.service.js.map