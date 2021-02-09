
import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello")
})
app.get("/api/products", (req, res) => {
  res.json(products)
})
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT}端口正在运行`);
})
