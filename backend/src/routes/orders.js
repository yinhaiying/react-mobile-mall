import express from "express";

import { addOrderItems, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middleware/authTokenMiddleware.js";
const router = express.Router();



// 创建订单
router.route("/").post(protect, addOrderItems)
// 获取订单
router.route("/:id").get(protect, getOrderById)
// 获取订单
router.route("/:id/pay").put(protect, updateOrderToPaid)

export default router;
