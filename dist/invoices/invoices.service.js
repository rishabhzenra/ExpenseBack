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
exports.InvoicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const invoice_entity_1 = require("./invoice.entity");
let InvoicesService = class InvoicesService {
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
            throw new common_1.NotFoundException('Invoice not found');
        return inv;
    }
    async create(userId, dto) {
        if (!dto.invoiceNumber) {
            const count = await this.repo.count({ where: { userId } });
            dto.invoiceNumber = `INV-${String(count + 1).padStart(4, '0')}`;
        }
        const inv = this.repo.create({ ...dto, userId, currency: dto.currency || 'INR' });
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
    async getStats(userId) {
        const invoices = await this.repo.find({ where: { userId } });
        return {
            total: invoices.length,
            draft: invoices.filter(i => i.status === invoice_entity_1.InvoiceStatus.DRAFT).length,
            sent: invoices.filter(i => i.status === invoice_entity_1.InvoiceStatus.SENT).length,
            paid: invoices.filter(i => i.status === invoice_entity_1.InvoiceStatus.PAID).length,
            overdue: invoices.filter(i => i.status === invoice_entity_1.InvoiceStatus.OVERDUE).length,
            totalValue: invoices.reduce((s, i) => s + Number(i.total), 0),
            paidValue: invoices.filter(i => i.status === invoice_entity_1.InvoiceStatus.PAID).reduce((s, i) => s + Number(i.total), 0),
            outstanding: invoices.filter(i => [invoice_entity_1.InvoiceStatus.SENT, invoice_entity_1.InvoiceStatus.OVERDUE].includes(i.status)).reduce((s, i) => s + Number(i.total), 0),
        };
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvoicesService);
//# sourceMappingURL=invoices.service.js.map