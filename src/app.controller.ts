import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BarsikCatService } from './modules/cats/providers/private-cat.service';
import { PublicCatService } from './modules/cats/providers/public-cat.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly catsService: PrivateCatService,
    private readonly catsService: PublicCatService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloPost(): string {
    return 'post hello';
  }

  @Get('/cats')
  getCatName(): string {
    return this.catsService.getCat().name;
    // return this.catsService.getCatName();
  }
}
