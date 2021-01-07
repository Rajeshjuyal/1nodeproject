import * as mongoose from 'mongoose';
export const SyllabusSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  id: { type: String, required: true },
  

  board: { type: String, required: true },
});

export interface Syllabus {
  subject: mongoose.ObjectId;
  subjectid: string;
  board:string;
 
}
