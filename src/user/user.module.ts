import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';

@Module({
  imports:[TyprOrmModule./forfeature([UserEntity])],
  controllers: [UserController],
})
export class UserModule {}
