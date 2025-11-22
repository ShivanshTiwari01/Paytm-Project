import mongoose, { Schema, Document } from 'mongoose';

export interface account extends Document {
  userId: any;
  balance: number;
}

const accountSchema: Schema<account> = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model<account>('Account', accountSchema);

export default Account;
