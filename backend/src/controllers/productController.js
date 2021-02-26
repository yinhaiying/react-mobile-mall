/*
controller用于和数据库的交互
*/
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler"
import Product from "../models/productModel.js";


/*
@desc:    请求所有的产品信息
@route:   GET /api/products?keyword
@access:  public
*/
const getProducts = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: "i"
    }
  } : {};
  const products = await Product.find({ ...keyword });
  res.json(products);
})


/*
@desc:    根据id获取单个产品
@route:   GET /api/products/:id
@access:  public
*/
const getProductById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  if (mongoose.isValidObjectId(id)) {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("产品不存在");
    }
  } else {
    res.status(404);
    throw new Error("产品不存在")
  }
})


export {
  getProducts,
  getProductById
}
