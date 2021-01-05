import{UpdateDateColumn,CreateDateColumn } from 'typeorm'; 
export class GenericEntity{
  @CreateDateColumn({default:()=>'CURRENT_TIMESTAP'.type:'timestap'})
  created at:Date;
  @
@UpdateDateColumn({default:()=>'CURRENT_TIMESTAP'.type:'timestap'})
update at:Date;
}