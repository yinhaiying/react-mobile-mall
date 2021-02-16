import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`mongoodb已经连接:${connection.connection.host}`.underline.green)
  } catch (error) {
    console.log(error.message.underline.red);
    process.exit(1);
  }
}

export default connectDB;
