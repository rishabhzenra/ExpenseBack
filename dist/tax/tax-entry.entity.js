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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxEntry = exports.TaxStatus = exports.TaxCategory = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
var TaxCategory;
(function (TaxCategory) {
    TaxCategory["INCOME_TAX"] = "income_tax";
    TaxCategory["GST"] = "gst";
    TaxCategory["TDS"] = "tds";
    TaxCategory["ADVANCE_TAX"] = "advance_tax";
    TaxCategory["PROPERTY_TAX"] = "property_tax";
    TaxCategory["OTHER"] = "other";
})(TaxCategory || (exports.TaxCategory = TaxCategory = {}));
var TaxStatus;
(function (TaxStatus) {
    TaxStatus["PENDING"] = "pending";
    TaxStatus["PAID"] = "paid";
    TaxStatus["OVERDUE"] = "overdue";
    TaxStatus["FILED"] = "filed";
})(TaxStatus || (exports.TaxStatus = TaxStatus = {}));
let TaxEntry = class TaxEntry {
    id;
    userId;
    user;
    title;
    category;
    status;
    amount;
    dueDate;
    paidDate;
    notes;
    financialYear;
    referenceNumber;
    createdAt;
};
exports.TaxEntry = TaxEntry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TaxEntry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaxEntry.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], TaxEntry.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaxEntry.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TaxCategory, default: TaxCategory.INCOME_TAX }),
    __metadata("design:type", String)
], TaxEntry.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TaxStatus, default: TaxStatus.PENDING }),
    __metadata("design:type", String)
], TaxEntry.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], TaxEntry.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], TaxEntry.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], TaxEntry.prototype, "paidDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], TaxEntry.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TaxEntry.prototype, "financialYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TaxEntry.prototype, "referenceNumber", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TaxEntry.prototype, "createdAt", void 0);
exports.TaxEntry = TaxEntry = __decorate([
    (0, typeorm_1.Entity)('tax_entries')
], TaxEntry);
//# sourceMappingURL=tax-entry.entity.js.map