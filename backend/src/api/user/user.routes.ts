import express from 'express';
import auth from '../../middleware/auth';
import * as controller from './user.controller';
import {
  validate,
  createUserSchema,
  signInSchema,
  updateUserSchema,
} from './user.validation';

const router = express.Router();

router.post('/signup', validate(createUserSchema), controller.signUp);

router.post('/signin', validate(signInSchema), controller.signIn);

router.put('/update', auth, validate(updateUserSchema), controller.updateUser);

router.get('/bulk', auth, controller.filterUser);

export default router;
