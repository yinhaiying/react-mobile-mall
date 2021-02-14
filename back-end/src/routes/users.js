import express from "express";

import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authTokenMiddleware.js";
const router = express.Router();

// 用户登陆验证
router.route("/login").post(authUser);



// 获取用户详情
router.route("/profile").get(protect, getUserProfile);



export default router;
