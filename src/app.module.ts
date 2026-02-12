import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get('DATABASE_URL');

        return {
          type: 'postgres',
          // If DATABASE_URL exists (Neon), use it. Otherwise, use local variables.
          url: databaseUrl,
          host: !databaseUrl ? configService.get('DB_HOST', 'localhost') : undefined,
          port: !databaseUrl ? configService.get<number>('DB_PORT', 5432) : undefined,
          username: !databaseUrl ? configService.get('DB_USERNAME', 'postgres') : undefined,
          password: !databaseUrl ? configService.get('DB_PASSWORD', 'postgres') : undefined,
          database: !databaseUrl ? configService.get('DB_NAME', 'expense_tracker') : undefined,
          autoLoadEntities: true,
          synchronize: configService.get('NODE_ENV') !== 'production',
          ssl: databaseUrl ? { rejectUnauthorized: false } : false,
        };
      },
    }),
    AuthModule,
    UsersModule,
    ExpensesModule,
    BudgetModule,
  ],
})
export class AppModule { }
