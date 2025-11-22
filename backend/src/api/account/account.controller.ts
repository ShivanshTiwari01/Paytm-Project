import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Account from '../../models/account.model';

export const getUserBalance = async (req: Request, res: Response) => {
  try {
    const userBalance: any = await Account.findOne({
      userId: req.userId,
    });

    return res.status(200).json({
      success: true,
      balance: userBalance.balance,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const transfer = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({
      userId: req.userId,
    }).session(session);

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Insufficient balance',
      });
    }

    const toAccount = await Account.findOne({
      userId: to,
    }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Invalid account',
      });
    }

    await Account.updateOne(
      {
        userId: req.userId,
      },
      {
        $inc: {
          balance: -amount,
        },
      }
    ).session(session);

    await Account.updateOne(
      {
        userId: to,
      },
      {
        $inc: {
          balance: amount,
        },
      }
    ).session(session);

    await session.commitTransaction();

    return res.status(200).json({
      success: true,
      message: 'Transfer successful',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
