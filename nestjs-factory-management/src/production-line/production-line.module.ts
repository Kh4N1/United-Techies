import { Module } from '@nestjs/common';
import { ProductionLineService } from './production-line.service';
import { ProductionLineController } from './production-line.controller';

@Module({
  providers: [ProductionLineService],
  controllers: [ProductionLineController]
})
export class ProductionLineModule {}
