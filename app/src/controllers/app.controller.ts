import { Controller, Get, Render} from '@nestjs/common';

@Controller({})
export class AppController {
    @Get('')
    index() {
        return { welcome: "welcome node js backend" };
    }
}