import * as mongoose from 'mongoose';
export const ParentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: Number, required: true },
  username: { type: Number, required: true },
  email: { type: Number, required: true },
  password: { type: Number, required: true },
  phone: { type: Number, required: true },
});

export interface Parent {
  id: string;
  name: string;
  photo: string;
  username: string;
  email: string;
  password: string;
  phone: string;
}
