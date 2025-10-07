import { Injectable, NestMiddleware } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const tokenCookie = req.cookies['token'];
        if (!tokenCookie) {
            throw new HttpException('No authorization token', HttpStatus.FORBIDDEN);
        }
        if (tokenCookie !== 'correct_token') {
            throw new HttpException('Invalid authorization token', HttpStatus.FORBIDDEN);
        }
        next();
    }
}
