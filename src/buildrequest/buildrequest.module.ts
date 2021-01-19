import { Module } from '@nestjs/common';
import { BuildrequestService } from './buildrequest.service';
import { BuildrequestController } from './buildrequest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildSchema } from './build.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Build', schema: BuildSchema }]),
  ],
  controllers: [BuildrequestController],
  providers: [BuildrequestService],
})
export class BuildrequestModule {}
