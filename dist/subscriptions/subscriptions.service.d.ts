import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
export declare class SubscriptionsService {
    private readonly repo;
    constructor(repo: Repository<Subscription>);
    findAll(userId: string): Promise<Subscription[]>;
    findOne(id: string, userId: string): Promise<Subscription>;
    create(userId: string, dto: CreateSubscriptionDto): Promise<Subscription>;
    update(id: string, userId: string, dto: UpdateSubscriptionDto): Promise<Subscription>;
    remove(id: string, userId: string): Promise<Subscription>;
    getAnalytics(userId: string): Promise<{
        totalActive: number;
        monthlyTotal: number;
        yearlyTotal: number;
    }>;
}
