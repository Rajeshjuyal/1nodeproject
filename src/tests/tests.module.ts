import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from './test.model';
import { UserSchema } from 'src/user/user.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Test', schema: TestSchema },
    {name:'User',schema:UserSchema}
  ])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
