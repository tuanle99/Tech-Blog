const router = require("express").Router();
const { Blog, Comment } = require("../../models");

router.post("/create", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.redirect("/");
    res.status(200).status(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/delete", async (req, res) => {
  console.log(req.body.blog_id);
  try {
    const del = await Blog.destroy({
      where: { id: req.body.blog_id },
    });
    res.redirect("/");
    res.status(200).status(del);
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
    res.redirect("/");
    res.status(200).status(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/update", async (req, res) => {
  try {
    const updateBlog = await Blog.update(
      {
        content: req.body.content,
        date: req.body.date,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.redirect("/dashboard");
    res.status(200).status(updateBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
