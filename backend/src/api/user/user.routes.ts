import express from 'express';
import * as controller from './user.controller';
import { validate, createUserSchema, signInSchema } from './user.validation';

const router = express.Router();

router.post('/user/signup', validate(createUserSchema), controller.signUp);

router.post('/user/signin', validate(signInSchema), controller.signIn);

export default router;
