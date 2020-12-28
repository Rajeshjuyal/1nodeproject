import * as mongoose from 'mongoose';
export const ParentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  vid: { type: Number, required: true },
  phone: { type: String, required: true },
});

export interface Parent {
  id: string;
  name: string;
  photo: string;
  usernmae: string;
  email: string;
  vid: Number;
  phone: string;
}
