
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bodyParser from "body-parser";
import path from "path";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import ordersRoutes from "./routes/orders.js";
import paymentRoutes from "./routes/payment.js"


const app = express();
dotenv.config();
connectDB();

// 解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/payment", paymentRoutes);



const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get("/", (req, res) => {
    res.send("测试")
  })
}



// 到这里还没有匹配上，说明没有找到资源，因此是404，手动抛出404错误，
app.use(notFound);
// 错误处理必须放到最后
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT}端口正在运行`.yellow);
})
