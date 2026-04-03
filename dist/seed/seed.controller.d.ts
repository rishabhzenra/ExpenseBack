import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    seed(req: any): Promise<{
        message: string;
    }>;
    clear(req: any): Promise<{
        message: string;
    }>;
}
