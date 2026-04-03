import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    create(email: string, hashedPassword: string): Promise<User>;
    updateOtp(userId: string, otp: string | undefined, expires: Date | undefined): Promise<void>;
    verifyUser(userId: string): Promise<void>;
    updateProfile(userId: string, data: {
        name?: string;
    }): Promise<User | null>;
}
