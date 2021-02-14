import express from "express";

import { getProductById, getProducts } from "../controllers/productController.js";

const router = express.Router();

// 获取所有产品信息
router.get("/", getProducts)



// 根据id获取单个产品信息
// router.get("/:id", getProductById);
router.route("/:id").get(getProductById);


export default router;
