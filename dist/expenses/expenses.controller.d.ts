import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { FilterExpenseDto } from './dto/filter-expense.dto';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    create(req: any, dto: CreateExpenseDto): Promise<import("./expense.entity").Expense>;
    findAll(req: any, filter: FilterExpenseDto): Promise<import("./expense.entity").Expense[]>;
    getAnalytics(req: any): Promise<{
        spentToday: number;
        spentThisWeek: number;
        spentThisMonth: number;
        spentLastWeek: number;
        spentLastMonth: number;
        weekTrend: number;
        monthTrend: number;
        healthScore: number;
        insights: string[];
        categoryBreakdown: {
            category: any;
            total: number;
        }[];
        necessaryBreakdown: {
            isNecessary: any;
            total: number;
        }[];
        dailyBreakdown: {
            date: any;
            total: number;
        }[];
        monthlyBreakdown: {
            month: any;
            total: number;
        }[];
    }>;
    update(req: any, id: string, dto: UpdateExpenseDto): Promise<import("./expense.entity").Expense>;
    remove(req: any, id: string): Promise<void>;
}
