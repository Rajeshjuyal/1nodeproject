import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//  import{ObjectidColumn,Objectid} from'typeorm';
// ObjectidColumn()
// id:Objectid;
enum Roles {
  user = 'user',
  admin = 'admin',
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: 'number';
  @Column({ length: 50, unique: true })
  name: string;
  @Column({ type: Text, nullable: true })
  about: string;
  @Column({ length: 50, unique: true })
  email: string;
  @Column({ type: 'enum', enum: Roles, default: Roles.user })
  role: Roles;
}
