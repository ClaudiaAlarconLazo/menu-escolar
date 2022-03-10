const { getRepository } = require("typeorm");
const { Order } = require("../entities/order.entity");
const schoolService = require("../services/school.service");

const getAll = async (id) => {
  const school = await schoolService.findById(id);
  if (school?.email === "admin@junaeb.cl") {
    return await getRepository(Order).find();
  }

  return await getRepository(Order).find({ where: { school: { id } } });
};

const create = async (data) => {
  return await getRepository(Order).save(data);
};

const update = async (id, data) => {
  const order = await getRepository(Order).findOne(id);
  getRepository(Order).merge(order, data);
  return await getRepository(Order).save(order);
};

const destroy = async (id) => {
  return await getRepository(Order).delete(id);
};

const findById = async (id) => {
  return await getRepository(Order).findOne(id);
};

module.exports = {
  getAll,
  create,
  update,
  destroy,
  findById,
};
