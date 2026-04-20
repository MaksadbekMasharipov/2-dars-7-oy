import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: String(process.env.DB_NAME as string),
      password: String(process.env.DB_PASSWORD as string),
      entities: [],
      synchronize: true,
      logging: false
    }),
    AuthModule,
    // ArticleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
