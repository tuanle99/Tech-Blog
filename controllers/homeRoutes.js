const router = require("express").Router();
const { Blog, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: { user_id: req.session.user_id },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/createBlog", async (req, res) => {
  res.render("createBlog", {
    logged_in: req.session.logged_in,
  });
});

router.get("/addcomment", async (req, res) => {
  res.render("addcomment", {
    logged_in: req.session.logged_in,
  });
});

router.get("/comment/:id", async (req, res) => {
  req.session.save(() => {
    req.session.blog_id = req.params.id;
  });
  const blog = await Blog.findByPk(req.params.id, {
    include: [{ model: User, attributes: ["name"] }],
  });
  const comments = await Comment.findAll({
    include: [
      {
        model: User,
      },
    ],
    where: { blog_id: blog.id },
  });
  res.render("comment", {
    comments,
    blog,
    logged_in: req.session.logged_in,
  });
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
