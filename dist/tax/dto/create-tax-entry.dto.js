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
exports.CreateTaxEntryDto = void 0;
const class_validator_1 = require("class-validator");
const tax_entry_entity_1 = require("../tax-entry.entity");
class CreateTaxEntryDto {
    title;
    category;
    status;
    amount;
    dueDate;
    paidDate;
    notes;
    financialYear;
    referenceNumber;
}
exports.CreateTaxEntryDto = CreateTaxEntryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tax_entry_entity_1.TaxCategory),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tax_entry_entity_1.TaxStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateTaxEntryDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "paidDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "financialYear", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTaxEntryDto.prototype, "referenceNumber", void 0);
//# sourceMappingURL=create-tax-entry.dto.js.map