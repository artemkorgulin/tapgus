import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { SignupDto } from '../dto/signup.dto';
import { SessionsUser } from "../entities/sessions.user.entity";
import { RolesUser } from "../entities/roles.user.entity";
import {SessionsUserRepository} from "../repositories/sessions.user.repository";
import {RolesUserRepository} from "../repositories/roles.user.repository";

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly sessionsUserRepository: SessionsUserRepository,
        private readonly rolesUserRepository: RolesUserRepository
    ) {}

    get(query:any): Promise<User[]> {
        return this.userRepository.findAll(query);
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

    hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    checkUserLogin(login: string): boolean {
        const user = this.userRepository.findByLogin(login);
        return !!user;
    }

    checkSessionUser(sessid: string): Promise<SessionsUser | null> {
        return  this.sessionsUserRepository.findByUserSessId(sessid);
    }

    getUserByLogin(login: string): Promise<User | null> {
        return this.userRepository.findByLogin(login);
    }

    async getUserByRole(sessid: string): Promise<RolesUser | null> {
        const sessUser = await this.sessionsUserRepository.findByUserSessId(sessid);
        if(sessUser?.user) {
            return this.rolesUserRepository.findByRoleUserById(String(sessUser?.user));
        } else {
            return null;
        }
    }

    async create(signupDto: SignupDto): Promise<User | null> {
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

    async signIn(loginData: any): Promise<any> {
        return this.sessionsUserRepository.createOrUpdateSession({
            sessid: loginData.sessionId,
            user: loginData.userId
        });
    }
}