import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math/math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mathService : MathService) { }
  
private logger = new Logger('AppController')

  @Post('Sum')
  async sumNumbers(@Body('data') data: Array<number>) {
    
  }

}
