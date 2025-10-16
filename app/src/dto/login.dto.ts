import { IsString } from 'class-validator';

export class LoginDto {

    @IsString()
    sessid: string;

    @IsString()
    login: string;

    @IsString()
    password: string;
}