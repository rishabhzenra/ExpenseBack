import { Repository } from 'typeorm';
import { SavingsGoal } from './savings-goal.entity';
import { CreateSavingsGoalDto } from './dto/create-savings-goal.dto';
import { UpdateSavingsGoalDto } from './dto/update-savings-goal.dto';
export declare class SavingsGoalsService {
    private readonly repo;
    constructor(repo: Repository<SavingsGoal>);
    findAll(userId: string): Promise<SavingsGoal[]>;
    findOne(id: string, userId: string): Promise<SavingsGoal>;
    create(userId: string, dto: CreateSavingsGoalDto): Promise<SavingsGoal>;
    update(id: string, userId: string, dto: UpdateSavingsGoalDto): Promise<SavingsGoal>;
    deposit(id: string, userId: string, amount: number): Promise<SavingsGoal>;
    remove(id: string, userId: string): Promise<SavingsGoal>;
}
