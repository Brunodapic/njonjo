import express from 'express';
import {asyncHandler} from '../utils/async.util'

import * as UserCtrl from '../controllers/user.ctrl';

const router = express.Router();

router.get('/', asyncHandler(UserCtrl.getUser));
router.get('/inventory', asyncHandler(UserCtrl.getUserInventory));
router.put('/update/inventory/:id', asyncHandler(UserCtrl.updateUserInventory));
router.post('/register', asyncHandler(UserCtrl.registerUser));
router.post('/login', asyncHandler(UserCtrl.loginUser));

export default router;
