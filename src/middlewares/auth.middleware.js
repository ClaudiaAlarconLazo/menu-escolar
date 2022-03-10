const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers["authorization"];

  try {
    req.auth = await jwt.verify(token, "secret");
    next();
  } catch (error) {
    return res.status(403).send(error);
  }
};

module.exports = {
  authentication,
};
