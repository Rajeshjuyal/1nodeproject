import { Module } from '@nestjs/common';
import { CollageService } from './collage.service';
import { CollageController } from './collage.controller';

@Module({
  controllers: [CollageController],
  providers: [CollageService]
})
export class CollageModule {}
