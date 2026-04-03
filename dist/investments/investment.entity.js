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
exports.Investment = exports.InvestmentType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
var InvestmentType;
(function (InvestmentType) {
    InvestmentType["STOCKS"] = "stocks";
    InvestmentType["MUTUAL_FUND"] = "mutual_fund";
    InvestmentType["FIXED_DEPOSIT"] = "fixed_deposit";
    InvestmentType["CRYPTO"] = "crypto";
    InvestmentType["GOLD"] = "gold";
    InvestmentType["REAL_ESTATE"] = "real_estate";
    InvestmentType["BONDS"] = "bonds";
    InvestmentType["PPF"] = "ppf";
    InvestmentType["OTHER"] = "other";
})(InvestmentType || (exports.InvestmentType = InvestmentType = {}));
let Investment = class Investment {
    id;
    userId;
    user;
    name;
    type;
    investedAmount;
    currentValue;
    platform;
    ticker;
    purchaseDate;
    notes;
    isActive;
    createdAt;
};
exports.Investment = Investment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Investment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Investment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Investment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Investment.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: InvestmentType, default: InvestmentType.STOCKS }),
    __metadata("design:type", String)
], Investment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 14, scale: 2 }),
    __metadata("design:type", Number)
], Investment.prototype, "investedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 14, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Investment.prototype, "currentValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Investment.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Investment.prototype, "ticker", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'date' }),
    __metadata("design:type", String)
], Investment.prototype, "purchaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Investment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Investment.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Investment.prototype, "createdAt", void 0);
exports.Investment = Investment = __decorate([
    (0, typeorm_1.Entity)('investments')
], Investment);
//# sourceMappingURL=investment.entity.js.map