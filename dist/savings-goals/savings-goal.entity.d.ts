import { User } from '../users/user.entity';
export declare class SavingsGoal {
    id: string;
    userId: string;
    user: User;
    title: string;
    target: number;
    current: number;
    deadline: string;
    icon: string;
    color: string;
    createdAt: Date;
}
