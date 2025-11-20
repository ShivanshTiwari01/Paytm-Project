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

router.post('/user/signup', validate(createUserSchema), controller.signUp);

router.post('/user/signin', validate(signInSchema), controller.signIn);

router.put(
  '/user/update',
  auth,
  validate(updateUserSchema),
  controller.updateUser
);

router.get('/user/bulk', auth, controller.filterUser);

export default router;
