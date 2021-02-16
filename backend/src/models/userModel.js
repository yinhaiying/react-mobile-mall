import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

// 在写入数据之前进行一些操作，比如数据的加密。
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt)
})



// 在Schema上添加方法，用于处理跟这个Schema相关的内容
// 实现用户密码匹配
userSchema.methods.matchPassword = async function (enteredPassword) {
  // 将前端获取的密码与数据库的密码进行匹配。
  return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model("User", userSchema);
export default User;
