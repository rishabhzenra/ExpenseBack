"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxEntryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tax_entry_dto_1 = require("./create-tax-entry.dto");
class UpdateTaxEntryDto extends (0, mapped_types_1.PartialType)(create_tax_entry_dto_1.CreateTaxEntryDto) {
}
exports.UpdateTaxEntryDto = UpdateTaxEntryDto;
//# sourceMappingURL=update-tax-entry.dto.js.map