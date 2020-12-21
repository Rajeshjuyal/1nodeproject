import { Module } from '@nestjs/common';
import { Productcontroller } from './Product.controller';
import { Productservice } from './Product.service';

@Module({
  controllers: [Productcontroller],
  providers: [Productservice],
})
export class ProductModule {}
