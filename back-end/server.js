
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
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

// 到这里还没有匹配上，说明没有找到资源，因此是404，手动抛出404错误，
app.use(notFound);
// 错误处理必须放到最后
app.use(errorHandler);









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT}端口正在运行`.yellow);
})
