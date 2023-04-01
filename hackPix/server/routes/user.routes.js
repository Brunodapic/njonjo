import express from "express";
import { asyncHandler } from "../utils/async.util";

import * as UserCtrl from "../controllers/user.ctrl";

const router = express.Router();

router.get("/", asyncHandler(UserCtrl.getUserScoreboard));
router.post("/register", asyncHandler(UserCtrl.registerUser));
router.post("/login", asyncHandler(UserCtrl.loginUser));
router.put("/update/robot/:id", asyncHandler(UserCtrl.updateUserRobot));
router.put("/update/cloud/:id", asyncHandler(UserCtrl.updateUserCloud));
router.put("/update/rainbow/:id", asyncHandler(UserCtrl.updateUserRainbow));

router.get("/:id", asyncHandler(UserCtrl.getUserInventory));

export default router;
