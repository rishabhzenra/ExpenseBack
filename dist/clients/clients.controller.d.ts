import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly service;
    constructor(service: ClientsService);
    findAll(req: any): Promise<import("./client.entity").Client[]>;
    getStats(req: any): Promise<{
        total: number;
        active: number;
        totalBilled: number;
        totalPaid: number;
        outstanding: number;
    }>;
    findOne(req: any, id: string): Promise<import("./client.entity").Client>;
    create(req: any, dto: CreateClientDto): Promise<import("./client.entity").Client>;
    update(req: any, id: string, dto: UpdateClientDto): Promise<import("./client.entity").Client>;
    remove(req: any, id: string): Promise<import("./client.entity").Client>;
}
