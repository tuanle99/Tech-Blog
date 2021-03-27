const router = require("express").Router();
const { Blog, Comment } = require("../../models");

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

router.post("/createComment", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      blog_id: req.session.blog_id,
      user_id: req.session.user_id,
    });
    res.status(200).status(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
