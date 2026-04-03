import { Repository } from 'typeorm';
import { Investment } from './investment.entity';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
export declare class InvestmentsService {
    private readonly repo;
    constructor(repo: Repository<Investment>);
    findAll(userId: string): Promise<Investment[]>;
    findOne(id: string, userId: string): Promise<Investment>;
    create(userId: string, dto: CreateInvestmentDto): Promise<Investment>;
    update(id: string, userId: string, dto: UpdateInvestmentDto): Promise<Investment>;
    remove(id: string, userId: string): Promise<Investment>;
    getPortfolioSummary(userId: string): Promise<{
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
}
