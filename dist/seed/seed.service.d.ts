import { Repository } from 'typeorm';
import { Expense } from '../expenses/expense.entity';
import { Income } from '../income/income.entity';
import { SavingsGoal } from '../savings-goals/savings-goal.entity';
import { Subscription } from '../subscriptions/subscription.entity';
import { Client } from '../clients/client.entity';
import { Invoice } from '../invoices/invoice.entity';
import { TaxEntry } from '../tax/tax-entry.entity';
import { Budget } from '../budget/budget.entity';
import { Investment } from '../investments/investment.entity';
export declare class SeedService {
    private expRepo;
    private incRepo;
    private goalRepo;
    private subRepo;
    private clientRepo;
    private invRepo;
    private taxRepo;
    private budgetRepo;
    private invstRepo;
    constructor(expRepo: Repository<Expense>, incRepo: Repository<Income>, goalRepo: Repository<SavingsGoal>, subRepo: Repository<Subscription>, clientRepo: Repository<Client>, invRepo: Repository<Invoice>, taxRepo: Repository<TaxEntry>, budgetRepo: Repository<Budget>, invstRepo: Repository<Investment>);
    clearAll(userId: string): Promise<{
        message: string;
    }>;
    seedAll(userId: string): Promise<{
        message: string;
    }>;
    private nextMonth;
}
