const router = require("express").Router();
const userRoutes = require("./userRoute");
const blogRoutes = require("./blogRoute");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;
