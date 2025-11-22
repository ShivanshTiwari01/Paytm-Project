import express from 'express';
import * as controller from './account.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.get('/balance', auth, controller.getUserBalance);

router.patch('/transfer', auth, controller.transfer);

export default router;
