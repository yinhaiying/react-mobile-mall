import express from "express";
import expressAsyncHandler from "express-async-handler"
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const router = express.Router();

/*
@desc:    请求所有的产品信息
@route:   GET /api/products
@access:  public
*/
router.get("/", expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}))


/*
@desc:    根据id获取单个产品
@route:   GET /api/products/:id
@access:  public
*/
router.get("/:id", expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  if (mongoose.isValidObjectId(id)) {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "产品不存在" })
    }
  } else {
    res.status(404).json({ message: "产品不存在" })
  }
}));


export default router;
