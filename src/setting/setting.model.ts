import * as mongoose from 'mongoose';
export const ScoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: Number, required: true },
  address: { type: Number, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: Number, required: true },
  primary: { type: Number, required: true },
  secondary: { type: Number, required: true },
});

export class Setting {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
    public address: string,
    public contact: string,
    public email: string,
    public about: string,
    public primary: string,
    public secondary: string,
  ) {}
}
