import { InvoiceStatus } from '../invoice.entity';
export declare class CreateInvoiceDto {
    invoiceNumber?: string;
    clientId?: string;
    clientName?: string;
    clientEmail?: string;
    clientAddress?: string;
    status?: InvoiceStatus;
    issueDate: string;
    dueDate?: string;
    items?: Array<{
        description: string;
        quantity: number;
        rate: number;
        amount: number;
    }>;
    subtotal?: number;
    taxRate?: number;
    taxAmount?: number;
    total?: number;
    notes?: string;
    currency?: string;
    paidDate?: string;
}
