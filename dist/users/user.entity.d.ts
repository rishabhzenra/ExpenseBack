import { Expense } from '../expenses/expense.entity';
import { Budget } from '../budget/budget.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    otp: string;
    otpExpires: Date;
    is2FAEnabled: boolean;
    badges: string[];
    createdAt: Date;
    expenses: Expense[];
    budgets: Budget[];
}
