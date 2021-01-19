import * as mongoose from 'mongoose';
export const Setting2Schema = new mongoose.Schema({
  Logo: { type: String, required: true },
  PrimaryColour: { type: String, required: true },
  SecondaryColour: { type: String, required: true },
  name: { type: String, required: true },
});
export class Setting2 {
  Logo: string;
  PrimaryColour: string;
  SecondaryColour: string;
  name: string;
}
