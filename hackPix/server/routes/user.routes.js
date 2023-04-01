import express from "express";
import { asyncHandler } from "../utils/async.util";

import * as UserCtrl from "../controllers/user.ctrl";

const router = express.Router();

router.post("/register", asyncHandler(UserCtrl.registerUser));
router.post("/login", asyncHandler(UserCtrl.loginUser));
router.put("/update/inventory/:id", asyncHandler(UserCtrl.updateUserInventory));
router.get("/:id", asyncHandler(UserCtrl.getUser));

export default router;
