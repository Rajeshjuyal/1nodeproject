import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: Number, required: true },
  username: { type: Number, required: true },
});






export interface Student {

  
     id: string,
     name: string,
     photo: string,
     username: string,
     email: string,

  
}