import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main')

const microServiceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port : 8123
  }
}

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, microServiceOptions)

  app.listen(() => {
    logger.log('Math microservice up and running Boii')
  })
  
}
bootstrap();
