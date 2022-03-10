const schoolService = require("../services/school.service");

const getAllSchools = async (req, res) => {
  try {
    console.log(req.auth);
    const schools = await schoolService.getAll();
    res.json(schools);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getById = async (req, res) => {
  const school = await schoolService.findById(req.params.id);
  res.json(school);
};

module.exports = {
  getAllSchools,
  getById,
};
