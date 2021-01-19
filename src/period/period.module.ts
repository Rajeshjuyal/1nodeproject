import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PeriodSchema } from './period.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Period', schema: PeriodSchema }]),
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}
