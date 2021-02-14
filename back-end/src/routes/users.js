import express from "express";

import { authUser } from "../controllers/userController.js";

const router = express.Router();

// 获取所有产品信息
router.route("/login").post(authUser);


export default router;
