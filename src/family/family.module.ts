import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';
import { MongooseModule } from '@nestjs/mongoose';
import{FamilySchema} from './family.model';
@Module({
  imports:[
MongooseModule.forFeature([{
  name:'Family', schema: FamilySchema}]),
  ],
  
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
