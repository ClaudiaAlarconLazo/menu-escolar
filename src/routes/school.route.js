const express = require("express");
const router = express.Router();
const schoolController = require('../controllers/school.controller');
//const { authentication } = require("../middlewares/auth.middleware");

router.get("/", schoolController.getAllSchools);
router.get("/:id", schoolController.getById);

module.exports = router;
