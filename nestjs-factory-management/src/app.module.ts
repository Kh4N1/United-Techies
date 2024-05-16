import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartsModule } from './parts/parts.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { CustomerOrdersModule } from './customer-orders/customer-orders.module';
import { CustomersModule } from './customers/customers.module';
import { ProductionScheduleModule } from './production-schedule/production-schedule.module';
import { ProductionLineModule } from './production-line/production-line.module';
import { CostsModule } from './costs/costs.module';
import { PricingModule } from './pricing/pricing.module';

@Module({
  imports: [PartsModule, ProductsModule, SuppliersModule, PurchaseOrdersModule, CustomerOrdersModule, CustomersModule, ProductionScheduleModule, ProductionLineModule, CostsModule, PricingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
