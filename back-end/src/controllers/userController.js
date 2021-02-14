
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler"
import User from "../models/userModel.js";


/*
@desc:    用户身份验证
@route:   POST /api/users/login
@access:  public
*/
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null
    })
  } else {
    res.status(401);
    throw new Error("邮箱或者密码不正确")
  }
})


export {
  authUser
}
