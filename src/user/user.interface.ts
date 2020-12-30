import{Entity,primarygeneratedColumn,Column,beforeinsert}
@Entity()
export class UserEntity{
  @primarygeneratedColumn()
  id:string;
  @Column()
  name:string;
  @Column({unique:true})
  username:string;
  @Column()
  password:string;
  @Column()
  email:string;
  







}