import { Module } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersSchema } from './chapter.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chapters', schema: ChaptersSchema }]),
  ],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
