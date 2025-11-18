import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user.model';
import generateToken from '../../helpers/auth';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body();

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: 'Account already exist, please sign in to continue',
      });
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const user: any = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id.toString());

    return res.status(200).json({
      success: true,
      message: 'Account created successfully',
      token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser: any = await User.findOne({
      email,
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'Account not found, please sign up to continue',
      });
    }

    const success = bcrypt.compare(password, existingUser.password);

    if (!success) {
      return res.status(500).json({
        success: false,
        message: 'Incorrect password, please try again',
      });
    }

    const token = generateToken(existingUser._id.toString());

    return res.send(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userExists = await User.findById(req.userId);

    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    await User.updateOne(
      {
        _id: req.userId,
      },
      req.body
    );

    return res.status(200).json({
      success: true,
      message: 'User updated successfully',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
