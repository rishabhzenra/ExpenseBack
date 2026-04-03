import { Repository } from 'typeorm';
import { SavingsGoal } from '../users/savings-goal.entity';
export declare class SavingsGoalController {
    private readonly goalsRepository;
    constructor(goalsRepository: Repository<SavingsGoal>);
    findAll(req: any): Promise<SavingsGoal[]>;
    create(req: any, data: any): Promise<SavingsGoal[]>;
    update(req: any, id: string, data: any): Promise<SavingsGoal | null>;
    remove(req: any, id: string): Promise<import("typeorm").DeleteResult>;
}
