import { InvestmentType } from '../investment.entity';
export declare class CreateInvestmentDto {
    name: string;
    type?: InvestmentType;
    investedAmount: number;
    currentValue?: number;
    platform?: string;
    ticker?: string;
    purchaseDate?: string;
    notes?: string;
    isActive?: boolean;
}
