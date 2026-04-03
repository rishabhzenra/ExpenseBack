import { User } from '../users/user.entity';
export declare enum TaxCategory {
    INCOME_TAX = "income_tax",
    GST = "gst",
    TDS = "tds",
    ADVANCE_TAX = "advance_tax",
    PROPERTY_TAX = "property_tax",
    OTHER = "other"
}
export declare enum TaxStatus {
    PENDING = "pending",
    PAID = "paid",
    OVERDUE = "overdue",
    FILED = "filed"
}
export declare class TaxEntry {
    id: string;
    userId: string;
    user: User;
    title: string;
    category: TaxCategory;
    status: TaxStatus;
    amount: number;
    dueDate: string;
    paidDate: string;
    notes: string;
    financialYear: string;
    referenceNumber: string;
    createdAt: Date;
}
