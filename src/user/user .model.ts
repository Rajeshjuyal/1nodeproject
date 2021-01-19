import * as mongoose from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String, required: true },
  image: { type: String, required: true },
  password: { type: String, required: true },
});
export interface User {
  name: string;
  email: string;
  phone_no: string;
  image: string;
  password: string;
}
export class CredentialsDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
