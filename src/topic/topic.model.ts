import * as mongoose from 'mongoose';
export const TopicSchema = new mongoose.Schema({
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chapter',
    required: 'true',
  },
  id: { type: String, required: true },
  topicname: { type: String, required: true },
  videourl: { type: String, required: true },
  Pdf: { type: String, required: true },
});

export interface Topic {
  chapter: mongoose.ObjectId;
  id: string;
  topicname: string;
  videourl: string;
}
