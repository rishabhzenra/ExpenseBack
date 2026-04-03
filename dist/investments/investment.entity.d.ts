import { User } from '../users/user.entity';
export declare enum InvestmentType {
    STOCKS = "stocks",
    MUTUAL_FUND = "mutual_fund",
    FIXED_DEPOSIT = "fixed_deposit",
    CRYPTO = "crypto",
    GOLD = "gold",
    REAL_ESTATE = "real_estate",
    BONDS = "bonds",
    PPF = "ppf",
    OTHER = "other"
}
export declare class Investment {
    id: string;
    userId: string;
    user: User;
    name: string;
    type: InvestmentType;
    investedAmount: number;
    currentValue: number;
    platform: string;
    ticker: string;
    purchaseDate: string;
    notes: string;
    isActive: boolean;
    createdAt: Date;
}
