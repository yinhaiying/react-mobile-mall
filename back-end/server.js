
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import products from "./data/products.js";
import connectDB from "./config/db.js";
import productsRoutes from "./routes/products.js";

const app = express();
dotenv.config();
connectDB();



app.get("/", (req, res) => {
  res.send("hello")
})




app.use("/api/products", productsRoutes)





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT}端口正在运行`.yellow);
})
