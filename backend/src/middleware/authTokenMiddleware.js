import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"


/*
自定义验证jsonwebtoken生成的token。由于我们之前生成token的载荷是通过id。
因此我们接受到token之后，可以将其解码，然后得到id，再去数据库中查找这个id，
如果存在则验证通过，否则验证不通过。

*/
export const protect = expressAsyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new Error("未授权,token未传递")
  }
  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1];
      // 结构jwt
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      // 获取除密码以外的信息，将信息保存在req中，方便后面的请求获取
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("未授权,token验证失败")
    }
  }

});


