import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Payment } from './typeorm/entities/Payment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      database: 'nestjs_db',
      entities: [User, Payment],
      synchronize: true,
      username: 'postgres',
      password: '123',
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}