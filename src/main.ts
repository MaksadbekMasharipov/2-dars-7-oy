import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({   // filterni ishlatib beradi
    whitelist: true, // DTOga mos kelmaydigan malumotlarni olib tashlaydi
    forbidNonWhitelisted: true, // DTOga mos kelmaydigan malumotlarni olib tashlaydi va xatolik beradi
    transform: true,  // DTOga mos kelmaydigan malumotlarni olib tashlaydi va xatolik beradi
  }));

  // Swaggerni ishga tushirish
  const config = new DocumentBuilder()
    .setTitle('Article Project')
    .setDescription('Article description')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = process.env.PORT || 3000
  await app.listen(PORT, () => {
    console.log(`Root api for project: http://localhost:${PORT}`,);
    console.log(`Root api for project: http://localhost:${PORT}/api-docs`);
    
    
  });
}
bootstrap();
