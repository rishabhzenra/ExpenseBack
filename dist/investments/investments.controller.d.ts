import { InvestmentsService } from './investments.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
export declare class InvestmentsController {
    private readonly service;
    constructor(service: InvestmentsService);
    findAll(req: any): Promise<import("./investment.entity").Investment[]>;
    getSummary(req: any): Promise<{
        totalInvested: number;
        totalCurrent: number;
        totalGain: number;
        gainPct: number;
        count: number;
        byType: Record<string, {
            invested: number;
            current: number;
            count: number;
        }>;
    }>;
    findOne(req: any, id: string): Promise<import("./investment.entity").Investment>;
    create(req: any, dto: CreateInvestmentDto): Promise<import("./investment.entity").Investment>;
    update(req: any, id: string, dto: UpdateInvestmentDto): Promise<import("./investment.entity").Investment>;
    remove(req: any, id: string): Promise<import("./investment.entity").Investment>;
}
