import { User } from '../users/user.entity';
import { ExpenseCategory } from './expense-category.enum';
export declare class Expense {
    id: string;
    userId: string;
    user: User;
    amount: number;
    category: ExpenseCategory;
    isNecessary: boolean;
    notes: string;
    merchant: string;
    isRecurring: boolean;
    isTaxDeductible: boolean;
    date: string;
    createdAt: Date;
}
