import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  orderItems: [{
    name: {
      type: String,
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product"
    }
  }],
  addressInfo: {
    address: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: String
    }
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date
  },
  deliveryPrice: {
    type: Number,
    required: true,
    default: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    wechat_address: { type: String }
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paiedAt: { type: Date }
}, {
  timestamps: true
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
