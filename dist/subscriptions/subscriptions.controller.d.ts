import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
export declare class SubscriptionsController {
    private readonly service;
    constructor(service: SubscriptionsService);
    findAll(req: any): Promise<import("./subscription.entity").Subscription[]>;
    getAnalytics(req: any): Promise<{
        totalActive: number;
        monthlyTotal: number;
        yearlyTotal: number;
    }>;
    findOne(req: any, id: string): Promise<import("./subscription.entity").Subscription>;
    create(req: any, dto: CreateSubscriptionDto): Promise<import("./subscription.entity").Subscription>;
    update(req: any, id: string, dto: UpdateSubscriptionDto): Promise<import("./subscription.entity").Subscription>;
    remove(req: any, id: string): Promise<import("./subscription.entity").Subscription>;
}
