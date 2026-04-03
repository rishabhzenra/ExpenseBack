import { SavingsGoalsService } from './savings-goals.service';
import { CreateSavingsGoalDto } from './dto/create-savings-goal.dto';
import { UpdateSavingsGoalDto } from './dto/update-savings-goal.dto';
export declare class SavingsGoalsController {
    private readonly service;
    constructor(service: SavingsGoalsService);
    findAll(req: any): Promise<import("./savings-goal.entity").SavingsGoal[]>;
    findOne(req: any, id: string): Promise<import("./savings-goal.entity").SavingsGoal>;
    create(req: any, dto: CreateSavingsGoalDto): Promise<import("./savings-goal.entity").SavingsGoal>;
    update(req: any, id: string, dto: UpdateSavingsGoalDto): Promise<import("./savings-goal.entity").SavingsGoal>;
    deposit(req: any, id: string, amount: number): Promise<import("./savings-goal.entity").SavingsGoal>;
    remove(req: any, id: string): Promise<import("./savings-goal.entity").SavingsGoal>;
}
