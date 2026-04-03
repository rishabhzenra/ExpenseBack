import { TaxService } from './tax.service';
import { CreateTaxEntryDto } from './dto/create-tax-entry.dto';
import { UpdateTaxEntryDto } from './dto/update-tax-entry.dto';
export declare class TaxController {
    private readonly service;
    constructor(service: TaxService);
    findAll(req: any): Promise<import("./tax-entry.entity").TaxEntry[]>;
    getSummary(req: any): Promise<{
        total: number;
        pending: number;
        paid: number;
        overdue: number;
        totalLiability: number;
        totalPaid: number;
        pendingAmount: number;
    }>;
    findOne(req: any, id: string): Promise<import("./tax-entry.entity").TaxEntry>;
    create(req: any, dto: CreateTaxEntryDto): Promise<import("./tax-entry.entity").TaxEntry>;
    update(req: any, id: string, dto: UpdateTaxEntryDto): Promise<import("./tax-entry.entity").TaxEntry>;
    remove(req: any, id: string): Promise<import("./tax-entry.entity").TaxEntry>;
}
