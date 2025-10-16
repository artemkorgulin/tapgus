import { User } from '../entities/user.entity';
import { SignupDto } from '../dto/signup.dto';

export interface IUserRepository {
    findAll(query?: any): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByLogin(login: string): Promise<User | null>;
    create(userData: SignupDto): Promise<User>;
    update(user: User, updateData: SignupDto): Promise<User>;
    delete(user: User): Promise<void>;
    count(query?: any): Promise<number>;
}