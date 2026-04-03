import { ClientStatus } from '../client.entity';
export declare class CreateClientDto {
    name: string;
    email?: string;
    phone?: string;
    company?: string;
    address?: string;
    industry?: string;
    status?: ClientStatus;
    totalBilled?: number;
    totalPaid?: number;
    notes?: string;
    taxId?: string;
}
