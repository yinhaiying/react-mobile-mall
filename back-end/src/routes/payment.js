import express from "express";
import { getProductById, getProducts } from "../controllers/productController.js";

const router = express.Router();



// paypal支付时获取client_id
router.get("/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
})



export default router;
