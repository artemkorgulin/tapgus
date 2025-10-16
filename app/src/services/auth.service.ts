import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";
import { User } from "../entities/user.entity";
import { RolesUser } from "../entities/roles.user.entity";

@Injectable()
export class AuthService {
    private tokenType;

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {
        this.tokenType = "bearer";
    }

    public generateTokenJwt(
        payload: object,
        expiresIn: string,
    ) {
        const accessToken = this.jwtService.sign(payload);

        return {
            access_token: accessToken,
            token_type: this.tokenType,
            refresh_token: "",
            expires_in: expiresIn,
        };
    }

    public loginCheckUser(
        login: string
    ): boolean {
        return this.userService.checkUserLogin(login);
    }

    public signUser(
        id: string,
        sessid: string
    ): void {
        this.userService.signIn({
            "userId": id,
            "sessionId": sessid
        });
    }

    public getUser(
        login: string,
    ): Promise<User | null> {
        return this.userService.getUserByLogin(login);
    }
    public checkRole(
        sessid: string,
    ): Promise<RolesUser | null> {
        return this.userService.getUserByRole(sessid);
    }

    public getToken(
        email: string
    ): string {
        return "";
    }
}