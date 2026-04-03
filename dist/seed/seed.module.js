"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seed_controller_1 = require("./seed.controller");
const seed_service_1 = require("./seed.service");
const expense_entity_1 = require("../expenses/expense.entity");
const income_entity_1 = require("../income/income.entity");
const savings_goal_entity_1 = require("../savings-goals/savings-goal.entity");
const subscription_entity_1 = require("../subscriptions/subscription.entity");
const client_entity_1 = require("../clients/client.entity");
const invoice_entity_1 = require("../invoices/invoice.entity");
const tax_entry_entity_1 = require("../tax/tax-entry.entity");
const budget_entity_1 = require("../budget/budget.entity");
const investment_entity_1 = require("../investments/investment.entity");
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([expense_entity_1.Expense, income_entity_1.Income, savings_goal_entity_1.SavingsGoal, subscription_entity_1.Subscription, client_entity_1.Client, invoice_entity_1.Invoice, tax_entry_entity_1.TaxEntry, budget_entity_1.Budget, investment_entity_1.Investment]),
        ],
        controllers: [seed_controller_1.SeedController],
        providers: [seed_service_1.SeedService],
    })
], SeedModule);
//# sourceMappingURL=seed.module.js.map