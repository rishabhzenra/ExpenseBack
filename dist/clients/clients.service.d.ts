import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsService {
    private readonly repo;
    constructor(repo: Repository<Client>);
    findAll(userId: string): Promise<Client[]>;
    findOne(id: string, userId: string): Promise<Client>;
    create(userId: string, dto: CreateClientDto): Promise<Client>;
    update(id: string, userId: string, dto: UpdateClientDto): Promise<Client>;
    remove(id: string, userId: string): Promise<Client>;
    getStats(userId: string): Promise<{
        total: number;
        active: number;
        totalBilled: number;
        totalPaid: number;
        outstanding: number;
    }>;
}
