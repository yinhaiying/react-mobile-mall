import express from "express";

import { authUser, getUserProfile, registerUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authTokenMiddleware.js";
const router = express.Router();



// 用户注册
router.route("/register").post(registerUser);

// 用户登陆验证
router.route("/login").post(authUser);




// 获取用户详情,更新用户信息
router.route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)



export default router;
