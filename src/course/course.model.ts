import * as mongoose from 'mongoose';
export const CourseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  sudents: { type: Number, required: true },
});



export interface Course {
     id: string,
     name: string,
     duration: string,
    students: string,
}
