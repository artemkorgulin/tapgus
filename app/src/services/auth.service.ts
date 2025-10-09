import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
    private tokenType;

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
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

    public async loginCheckUser(
        login: string
    ): Promise<boolean> {
        return await this.userService.checkUserLogin(login);
    }

    public getToken(
        email: string
    ): string {
        return "";
    }
}