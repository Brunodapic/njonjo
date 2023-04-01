import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';

router.get('/', RobotCtrl.getAllRobots);

router.post('/create', RobotCtrl.create);

export default router;
