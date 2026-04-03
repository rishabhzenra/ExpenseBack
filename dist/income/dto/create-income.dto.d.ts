import { IncomeCategory } from '../income-category.enum';
export declare class CreateIncomeDto {
    amount: number;
    category: IncomeCategory;
    date: string;
    notes?: string;
    source?: string;
    isRecurring?: boolean;
}
