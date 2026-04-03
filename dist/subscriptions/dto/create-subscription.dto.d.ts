import { BillingCycle, SubscriptionStatus } from '../subscription.entity';
export declare class CreateSubscriptionDto {
    name: string;
    description?: string;
    amount: number;
    billingCycle?: BillingCycle;
    status?: SubscriptionStatus;
    category?: string;
    logo?: string;
    nextBillingDate?: string;
    startDate?: string;
    isTrial?: boolean;
}
