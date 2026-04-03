import { TaxCategory, TaxStatus } from '../tax-entry.entity';
export declare class CreateTaxEntryDto {
    title: string;
    category?: TaxCategory;
    status?: TaxStatus;
    amount: number;
    dueDate?: string;
    paidDate?: string;
    notes?: string;
    financialYear?: string;
    referenceNumber?: string;
}
