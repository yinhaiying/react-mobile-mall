export const notFound = (req, res, next) => {
  console.log("这里为什么会执行")
  const error = new Error(`查找不到 - ${req.originalUrl}`)
  res.status(404)
  next(error);
}


export const errorHandler = (error, req, res, next) => {
  console.log("error:", error);
  // 必须有错误被检测到，才会触发。
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: error.message, stack: process.env.NODE_ENV === 'production' ? null : error.stack });
  next();
};
