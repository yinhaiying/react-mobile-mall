import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler"
import Order from "../models/orderModel.js";



/*
@desc:    创建一条订单
@route:   POST /api/orders
@access:  private
*/
export const addOrderItems = expressAsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("订单信息为空");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder)
  }
})

/*
@desc:    根据id获取订单
@route:   GET /api/orders:id
@access:  private
*/
export const getOrderById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  // 向订单信息中填充user信息内容
  const order = await Order.findById(id).populate("user", "name email");
  if (order) {
    res.json(order);
  } else {
    res.json(404);
    throw new Error("未查找到订单");
  }
})


/*
@desc:    更新支付后的订单
@route:   PUT /api/orders:id/pay
@access:  private
*/
export const updateOrderToPaid = expressAsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address
    }
    const updatedOrder = await order.save();
    res.json(updatedOrder)
  } else {
    res.json(404);
    throw new Error("未查找到订单");
  }
})
