import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class PostStatusInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        return next.handle().pipe(
            map(value => {
                if (req.method === 'POST') {
                    if (res.statusCode === HttpStatus.CREATED) {
                        res.status(HttpStatus.OK);
                    }
                } else if (req.method === 'OPTIONS') {
                    res.status(HttpStatus.NO_CONTENT);
                }
                return value;
            }),
        );
    }
}