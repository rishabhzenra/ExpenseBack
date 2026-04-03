import { Repository } from 'typeorm';
import { Invoice } from './invoice.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoicesService {
    private readonly repo;
    constructor(repo: Repository<Invoice>);
    findAll(userId: string): Promise<Invoice[]>;
    findOne(id: string, userId: string): Promise<Invoice>;
    create(userId: string, dto: CreateInvoiceDto): Promise<Invoice>;
    update(id: string, userId: string, dto: UpdateInvoiceDto): Promise<Invoice>;
    remove(id: string, userId: string): Promise<Invoice>;
    getStats(userId: string): Promise<{
        total: number;
        draft: number;
        sent: number;
        paid: number;
        overdue: number;
        totalValue: number;
        paidValue: number;
        outstanding: number;
    }>;
}
