import { Module } from '@nestjs/common';
import { ProductionScheduleService } from './production-schedule.service';
import { ProductionScheduleController } from './production-schedule.controller';

@Module({
  providers: [ProductionScheduleService],
  controllers: [ProductionScheduleController]
})
export class ProductionScheduleModule {}
