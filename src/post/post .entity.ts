import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import{UserEntity} from 'src/user/user.entity'
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ length: 50 })
  title: string;
  @Column('text')
  body: string;
  @ManyToOne(
  ()=>UserEntity)
  user:UserEntity)=>user.post,
  {onUpdate:'CASCADE',ondelete:'CASCADE'},

)
@JoinColumn({name:'user_id})
user:UseEntity;
}

