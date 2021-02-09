import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

// 初始化
dotenv.config();
connectDB();



//插入样本数据到数据库
const insertData = async () => {
  try {
    //先清空数据库中的样本数据
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    // 实现数据的插入
    const createdUsers = await User.insertMany(users);

    // 实现产品数据的插入，由于产品数据中需要一个user字段，因此需要先获取到这个字段。
    const adminUser = createdUsers[0]._id;
    const newProducts = products.map((product) => {
      return {
        user: adminUser,
        ...product
      }
    });
    await Product.insertMany(newProducts);
    console.log(`插入成功`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`seeder Error:${error}`.red);
    process.exit(1)
  }
}


//删除样本数据
const removeData = async () => {
  try {
    //先清空数据库中的样本数据
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log("样本数据删除成功".red);
    process.exit();
  } catch (error) {
    console.log(`seeder Error:${error}`.red);
    process.exit(1);
  }
}


// 判断命令行执行的函数
// process.argv 用于获取命令行中的输入 比如 node index.js -d   argv[0]就是指node argv[1]指index.js
if (process.argv[2] === "-rm") {
  removeData();
} else {
  insertData();
}
