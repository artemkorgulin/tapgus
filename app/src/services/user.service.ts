import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { SignupDto } from '../dto/signup.dto';
import { LoginDto } from '../dto/login.dto';
import { LoginResponseDto } from '../dto/loginResponse.dto';

@Injectable()
export class UserService {

    private i: 0;

    constructor(private readonly userRepository: UserRepository) {}

    get() {
        return this.userRepository.findAll();
    }
    getUser(param: { userId: number }) {
        return param;
    }

    createUser(req: Request) {
        return req.body;
    }
    update(req: Request, param: { userId: number }) {
        return { body: req.body, param };
    }
    delete(param: { userId: number }) {
        return param;
    }
    tap(param: { UserPoints: number }) {
        return { status: "success" };
    }

    hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    async checkUserLogin(login: string): Promise<boolean> {
        const user = await this.userRepository.findByLogin(login);
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    async create(signupDto: SignupDto): Promise<User> {
        const { email, password, username } = signupDto;
        const user = new User();

        user.salt = String(bcrypt.genSalt());
        user.password = String(this.hashPassword(password, user.salt));
        user.email = email;
        user.username = username;

        try {
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(loginDto: LoginDto): Promise<LoginResponseDto | null> {
        const {email, password} = loginDto;
        const user = await this.userRepository.findByEmail(email);

        if (user && (await user.validatePassword(password))) {
            const userResponse = new LoginResponseDto();

            userResponse.username = user.username;
            userResponse.email = user.email;
            return userResponse;
        } else {
            return null;
        }
    }
}