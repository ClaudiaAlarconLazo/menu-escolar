const { getRepository } = require("typeorm");
const { School } = require("../entities/school.entity");

const getAll = async () => {
  return await getRepository(School).find({});
};

const create = async (data) => {
  return await getRepository(School).save(data);
};

const findByEmail = async (email) => {
  return await getRepository(School).findOne({
    where: { email },
  });
};

const findById = async (id) => {
  return await getRepository(School).findOne({
    where: { id },
    relations: ["orders"],
  });
};

module.exports = {
  getAll,
  create,
  findByEmail,
  findById,
};
