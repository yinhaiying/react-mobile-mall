
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs"
const salt = bcrypt.genSaltSync(10);
/*
@desc:    用户身份验证
@route:   POST /api/users/login
@access:  public
*/
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    const { _id: id, name, email, isAdmin } = user;
    res.json({
      id,
      name,
      email,
      isAdmin,
      token: generateToken(id)
    })
  } else {
    res.status(401);
    throw new Error("邮箱或者密码不正确")
  }
})


/*
@desc:    获取登陆成功之后的用户详情
@route:   GET /api/users/profile
@access:  private 只有登陆成功之后的用户自己才能获取信息
*/
const getUserProfile = expressAsyncHandler(async (req, res) => {
  console.log("req:", req.user)
  const user = await User.findById(req.user._id);
  if (user) {
    const { _id: id, name, email, isAdmin } = user;
    res.json({
      id,
      name,
      email,
      isAdmin,
      token: generateToken(id)
    })
  } else {
    res.status(404);
    throw new Error("用户不存在")
  }

})

/*
@desc:    用户注册
@route:   POST /api/users/register
@access:  public
*/
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email })
  if (user) {
    res.status(400);
    throw new Error("邮箱已注册");
  }
  const newUser = await User.create({ name, email, password })
  if (newUser) {
    res.status(201);
    const { _id: id, name, email, isAdmin } = newUser;
    res.json({
      id,
      name,
      email,
      isAdmin,
      token: generateToken(id)
    })
  } else {
    res.status(400);
    throw new Error("用户注册失败");
  }
})


export {
  authUser,
  getUserProfile,
  registerUser
}
