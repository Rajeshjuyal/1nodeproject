import * as mongoose from 'mongoose';
export const TestSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: 'true',
  },
  test_name: String,
  total_marks: String,
  obtained_marks: String,
  
});

export interface Test {
  teacher: string;
  test_name: true;
  total_marks: string;
  obtained_marks: string;
}
