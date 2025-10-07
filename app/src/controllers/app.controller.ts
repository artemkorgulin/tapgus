import { Controller, Get, Render} from '@nestjs/common';

@Controller({})
export class AppController {
    @Get('tapgus')
    @Render('tapgus')
    tapgus() {
        return { tapgus: [] };
    }

    @Get('')
    @Render('login')
    index() {
        return { login: [] };
    }
}