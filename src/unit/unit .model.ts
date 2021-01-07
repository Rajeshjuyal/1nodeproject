import * as mongoose from 'mongoose';
export const UnitSchema = new mongoose.Schema({
  syllabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Syllabus',
    required: 'true',
  },
  id: { type: String, required: true },
  unit_name: { type: String, required: true },
  chapter_id: { type: String, required: true },
  duration: { type: String, required: true },
});

export interface Unit {
  syllabus: mongoose.ObjectId;
  id: string;
  unit_name: string;
  chapter_id: string;
}
