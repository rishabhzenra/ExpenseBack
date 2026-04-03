import { User } from '../users/user.entity';
export declare enum InvoiceStatus {
    DRAFT = "draft",
    SENT = "sent",
    PAID = "paid",
    OVERDUE = "overdue",
    CANCELLED = "cancelled"
}
export declare class Invoice {
    id: string;
    userId: string;
    user: User;
    invoiceNumber: string;
    clientId: string;
    clientName: string;
    clientEmail: string;
    clientAddress: string;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    items: Array<{
        description: string;
        quantity: number;
        rate: number;
        amount: number;
    }>;
    subtotal: number;
    taxRate: number;
    taxAmount: number;
    total: number;
    notes: string;
    currency: string;
    paidDate: string;
    createdAt: Date;
}
