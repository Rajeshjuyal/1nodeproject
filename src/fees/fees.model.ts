import * as mongoose from 'mongoose';
export const CourseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  student: { type: String, required: true },
  parent: { type: Number, required: true },
 amount: { type: Number, required: true },
});




export class Fees {
     id: string,
     student: string,
     parent: string,
  amount: string,
}
