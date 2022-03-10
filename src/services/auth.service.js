const jwt = require("jsonwebtoken");
const bcript = require("bcryptjs");
const { JWT_SECRET } = process.env;
const saltRound = 10;
const schoolService = require("./school.service");
const { School } = require("../entities/school.entity");

const generateToken = (school) => {
  return jwt.sign({ school }, "secret", { expiresIn: "12h" });
};

const signUp = async (data) => {
  data.password = await bcript.hash(data.password, saltRound);
  const school = new School(data);
  return await schoolService.create(school);
};

const login = async (data) => {
  const { id, email, name, password } = await schoolService.findByEmail(data.email);
  if (!id) {
    throw new Error("Credencial inválida");
  }

  const isCorrectPassword = await bcript.compare(data.password, password);
  if (!isCorrectPassword) {
    throw new Error("Credencial inválida");
  }

  return {
    access_token: generateToken({ sub: id, email, name }),
    school: { id, email, name },
  };
};

module.exports = {
  signUp,
  login,
};
