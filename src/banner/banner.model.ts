import * as mongoose from 'mongoose';
export const BannerSchema = new mongoose.Schema({
  image1: { type: String, required: true },
  status: { type: Boolean, default: true },
  role: { type: String, required: true },
  id: { type: String, required: true },
});

export interface Banner {
  image1: string;
  status: boolean;
  role: string;
  id: string;
}
