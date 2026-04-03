import { Repository } from 'typeorm';
import { TaxEntry } from './tax-entry.entity';
import { CreateTaxEntryDto } from './dto/create-tax-entry.dto';
import { UpdateTaxEntryDto } from './dto/update-tax-entry.dto';
export declare class TaxService {
    private readonly repo;
    constructor(repo: Repository<TaxEntry>);
    findAll(userId: string): Promise<TaxEntry[]>;
    findOne(id: string, userId: string): Promise<TaxEntry>;
    create(userId: string, dto: CreateTaxEntryDto): Promise<TaxEntry>;
    update(id: string, userId: string, dto: UpdateTaxEntryDto): Promise<TaxEntry>;
    remove(id: string, userId: string): Promise<TaxEntry>;
    getSummary(userId: string): Promise<{
        total: number;
        pending: number;
        paid: number;
        overdue: number;
        totalLiability: number;
        totalPaid: number;
        pendingAmount: number;
    }>;
}
