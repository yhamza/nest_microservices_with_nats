import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/Payment';
import { User } from './typeorm/entities/User';

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
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}