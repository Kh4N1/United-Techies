import { Module } from '@nestjs/common';
import { CustomerOrdersService } from './customer-orders.service';
import { CustomerOrdersController } from './customer-orders.controller';

@Module({
  providers: [CustomerOrdersService],
  controllers: [CustomerOrdersController]
})
export class CustomerOrdersModule {}
