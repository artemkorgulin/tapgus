import { Controller, Get, Render} from '@nestjs/common';

@Controller({})
export class AppController {
    @Get('tapgus')
    tapgus() {
        return { tapgus: [] };
    }

    @Get('')
    index() {
        return { login: [] };
    }
}