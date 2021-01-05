import * as mongoose from 'mongoose';
export const BannerSchema = new mongoose.Schema({
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  
});

export interface Banner{
  image1: string;
  image2: string;
  
}
