import { User } from '../users/user.entity';
export declare enum ClientStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    PROSPECT = "prospect"
}
export declare class Client {
    id: string;
    userId: string;
    user: User;
    name: string;
    email: string;
    phone: string;
    company: string;
    address: string;
    industry: string;
    status: ClientStatus;
    totalBilled: number;
    totalPaid: number;
    notes: string;
    taxId: string;
    createdAt: Date;
}
