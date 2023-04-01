import express from 'express';

import * as UserCtrl from '../controllers/user.ctrl';

const router = express.Router();

router.get('/', UserCtrl.getAllUsers);

export default router;
