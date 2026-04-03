import { User } from './user.entity';
export declare class SavingsGoal {
    id: string;
    userId: string;
    user: User;
    title: string;
    targetAmount: number;
    currentAmount: number;
    deadline: string;
    createdAt: Date;
}
