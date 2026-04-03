import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoicesController {
    private readonly service;
    constructor(service: InvoicesService);
    findAll(req: any): Promise<import("./invoice.entity").Invoice[]>;
    getStats(req: any): Promise<{
        total: number;
        draft: number;
        sent: number;
        paid: number;
        overdue: number;
        totalValue: number;
        paidValue: number;
        outstanding: number;
    }>;
    findOne(req: any, id: string): Promise<import("./invoice.entity").Invoice>;
    create(req: any, dto: CreateInvoiceDto): Promise<import("./invoice.entity").Invoice>;
    update(req: any, id: string, dto: UpdateInvoiceDto): Promise<import("./invoice.entity").Invoice>;
    remove(req: any, id: string): Promise<import("./invoice.entity").Invoice>;
}
