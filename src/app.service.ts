import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Get()
  hola(): string {
    return 'hola'
  }
  
  
}
