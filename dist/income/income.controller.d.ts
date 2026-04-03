import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
export declare class IncomeController {
    private readonly incomeService;
    constructor(incomeService: IncomeService);
    create(req: any, dto: CreateIncomeDto): Promise<import("./income.entity").Income>;
    findAll(req: any, startDate?: string, endDate?: string, category?: string): Promise<import("./income.entity").Income[]>;
    getAnalytics(req: any): Promise<{
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
    findOne(req: any, id: string): Promise<import("./income.entity").Income>;
    update(req: any, id: string, dto: UpdateIncomeDto): Promise<import("./income.entity").Income>;
    remove(req: any, id: string): Promise<void>;
}
