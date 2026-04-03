import { User } from '../users/user.entity';
import { IncomeCategory } from './income-category.enum';
export declare class Income {
    id: string;
    userId: string;
    user: User;
    amount: number;
    category: IncomeCategory;
    notes: string;
    source: string;
    isRecurring: boolean;
    date: string;
    createdAt: Date;
}
