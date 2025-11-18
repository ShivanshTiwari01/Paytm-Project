import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const createUserSchema = z.object({
  body: z.object({
    firstName: z.string().min(4, 'Name must be atleast two characters'),
    latName: z.string(),
    email: z.email('Invalid email format'),
    password: z.string().min(8, 'Password must be alteast 8 characters'),
  }),
});

export const signInSchema = z.object({
  body: z.object({
    email: z.email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const validate =
  (schema: z.ZodType<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }
  };
