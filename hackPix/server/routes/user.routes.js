import express from 'express';
import {asyncHandler} from '../utils/async.util'

import * as UserCtrl from '../controllers/user.ctrl';

const router = express.Router();

router.get('/', asyncHandler(UserCtrl.getAllUsers));
router.post('/register', asyncHandler(UserCtrl.registerUser));
router.post('/login', asyncHandler(UserCtrl.loginUser));

export default router;
