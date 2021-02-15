import express from "express";

import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authTokenMiddleware.js";
const router = express.Router();



// 用户注册
router.route("/register").post(protect, addOrderItems);

export default router;
