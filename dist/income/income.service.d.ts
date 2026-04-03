import { Repository } from 'typeorm';
import { Income } from './income.entity';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
export declare class IncomeService {
    private readonly incomeRepository;
    constructor(incomeRepository: Repository<Income>);
    create(userId: string, dto: CreateIncomeDto): Promise<Income>;
    findAll(userId: string, startDate?: string, endDate?: string, category?: string): Promise<Income[]>;
    findOne(id: string, userId: string): Promise<Income>;
    update(id: string, userId: string, dto: UpdateIncomeDto): Promise<Income>;
    remove(id: string, userId: string): Promise<void>;
    getTotalInRange(userId: string, startDate: string, endDate: string): Promise<number>;
    getAnalytics(userId: string): Promise<{
        thisMonthTotal: number;
        lastMonthTotal: number;
        trend: number;
        categoryBreakdown: {
            category: any;
            total: number;
        }[];
        monthlyBreakdown: {
            month: any;
            total: number;
        }[];
    }>;
}
