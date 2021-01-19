import { Module } from '@nestjs/common';
import { AssignemntService } from './assignemnt.service';
import { AssignemntController } from './assignemnt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentSchema } from './assignment.model';



@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Assignment', schema: AssignmentSchema },
     
    ]),
    // JwtModule.register({
    //   secret: '12345678923sonali',
    //   signOptions: {
    //     expiresIn: '4H',
    //   },
    // }),
    // PassportModule.register({
    //   defaultStrategy: 'jwt',
    // }),
  ],
  controllers: [AssignemntController],
  providers: [AssignemntService],
})
export class AssignemntModule {}
