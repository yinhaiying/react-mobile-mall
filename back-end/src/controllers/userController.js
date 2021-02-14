
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

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




export {
  authUser,
  getUserProfile
}
