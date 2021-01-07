import * as mongoose from 'mongoose';
export const ChaptersSchema = new mongoose.Schema({
  unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: 'true',
  },
  chapter: { type: String, required: true },
  topic_id: { type: String, required: true },
  video_url: { type: String, required: true },
});

export interface Chapters {
  unit: mongoose.ObjectId;
  chapter: string;
  topic_id: string;
  vidoe_url: string;
}
