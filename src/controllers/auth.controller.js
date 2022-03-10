const authService = require("../services/auth.service");

const signUp = async (req, res) => {
  const school = await authService.signUp(req.body);
  res.status(201).json(school);
};

const login = async (req, res) => {
  try {
    const school = await authService.login(req.body);
    res.status(200).json(school);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  signUp,
  login,
};
