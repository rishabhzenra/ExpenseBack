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
exports.IncomeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const income_entity_1 = require("./income.entity");
let IncomeService = class IncomeService {
    incomeRepository;
    constructor(incomeRepository) {
        this.incomeRepository = incomeRepository;
    }
    async create(userId, dto) {
        const income = this.incomeRepository.create({ ...dto, userId });
        return this.incomeRepository.save(income);
    }
    async findAll(userId, startDate, endDate, category) {
        const where = { userId };
        if (startDate && endDate) {
            where.date = (0, typeorm_2.Between)(startDate, endDate);
        }
        if (category) {
            where.category = category;
        }
        return this.incomeRepository.find({
            where,
            order: { date: 'DESC', createdAt: 'DESC' },
        });
    }
    async findOne(id, userId) {
        const income = await this.incomeRepository.findOne({ where: { id } });
        if (!income)
            throw new common_1.NotFoundException('Income not found');
        if (income.userId !== userId)
            throw new common_1.ForbiddenException('Access denied');
        return income;
    }
    async update(id, userId, dto) {
        const income = await this.findOne(id, userId);
        Object.assign(income, dto);
        return this.incomeRepository.save(income);
    }
    async remove(id, userId) {
        await this.findOne(id, userId);
        await this.incomeRepository.delete(id);
    }
    async getTotalInRange(userId, startDate, endDate) {
        const result = await this.incomeRepository
            .createQueryBuilder('income')
            .select('COALESCE(SUM(income.amount), 0)', 'total')
            .where('income.userId = :userId', { userId })
            .andWhere('income.date BETWEEN :startDate AND :endDate', { startDate, endDate })
            .getRawOne();
        return parseFloat(result.total);
    }
    async getAnalytics(userId) {
        const now = new Date();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString().split('T')[0];
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0];
        const yearStart = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
        const [thisMonthTotal, lastMonthTotal] = await Promise.all([
            this.getTotalInRange(userId, monthStart, monthEnd),
            this.getTotalInRange(userId, lastMonthStart, lastMonthEnd),
        ]);
        const categoryBreakdown = await this.incomeRepository
            .createQueryBuilder('income')
            .select('income.category', 'category')
            .addSelect('COALESCE(SUM(income.amount), 0)', 'total')
            .where('income.userId = :userId', { userId })
            .andWhere('income.date BETWEEN :start AND :end', { start: monthStart, end: monthEnd })
            .groupBy('income.category')
            .getRawMany();
        const monthlyBreakdown = await this.incomeRepository
            .createQueryBuilder('income')
            .select("TO_CHAR(income.date::date, 'YYYY-MM')", 'month')
            .addSelect('COALESCE(SUM(income.amount), 0)', 'total')
            .where('income.userId = :userId', { userId })
            .andWhere('income.date >= :start', { start: yearStart })
            .groupBy('month')
            .orderBy('month', 'ASC')
            .getRawMany();
        const trend = lastMonthTotal > 0 ? ((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100 : 0;
        return {
            thisMonthTotal,
            lastMonthTotal,
            trend: Math.round(trend),
            categoryBreakdown: categoryBreakdown.map(c => ({ category: c.category, total: parseFloat(c.total) })),
            monthlyBreakdown: monthlyBreakdown.map(m => ({ month: m.month, total: parseFloat(m.total) })),
        };
    }
};
exports.IncomeService = IncomeService;
exports.IncomeService = IncomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(income_entity_1.Income)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IncomeService);
//# sourceMappingURL=income.service.js.map