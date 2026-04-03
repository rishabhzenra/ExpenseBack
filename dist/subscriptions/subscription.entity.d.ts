import { User } from '../users/user.entity';
export declare enum BillingCycle {
    MONTHLY = "monthly",
    YEARLY = "yearly",
    WEEKLY = "weekly",
    QUARTERLY = "quarterly"
}
export declare enum SubscriptionStatus {
    ACTIVE = "active",
    PAUSED = "paused",
    CANCELLED = "cancelled"
}
export declare class Subscription {
    id: string;
    userId: string;
    user: User;
    name: string;
    description: string;
    amount: number;
    billingCycle: BillingCycle;
    status: SubscriptionStatus;
    category: string;
    logo: string;
    nextBillingDate: string;
    startDate: string;
    isTrial: boolean;
    createdAt: Date;
}
