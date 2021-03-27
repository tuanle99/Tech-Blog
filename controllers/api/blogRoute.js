const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/create", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).status(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
