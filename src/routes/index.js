const router = require("express-promise-router")();
const moment = require("moment");
const { authentication } = require("../middlewares/auth.middleware");

router.use("/schools", authentication, require("./school.route"));
router.use("/orders", authentication, require("./order.route"));

router.use("/auth", require("./auth.route"));

router.use("/*", (req, res) => {
  res.json({
    message: "Menú escolar API",
    timestamp: moment().locale("es").format("LLLL"),
  });
});

module.exports = router;
