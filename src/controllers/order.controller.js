const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
  console.log(req.auth);
  const id = req.auth.school.sub;
  const orders = await orderService.getAll(id);
  res.json(orders);
};

const createOrder = async (req, res) => {
  const order = await orderService.create(req.body);
  res.json(order);
};

const updateOrder = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const order = await orderService.update(id, payload);
  res.json(order);
};

const deleteOrder = async (req, res) => {
  const order = await orderService.destroy(req.params.id);
  res.json(order);
};

const findOrderById = async (req, res) => {
  const order = await orderService.findById(req.params.id);
  res.json(order);
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  findOrderById,
};
