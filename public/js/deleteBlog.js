const deleteBlogHandlers = async (event) => {
  event.preventDefault();
  const blog_id = document
    .getElementById("deleteBlogBtn")
    .getAttribute("value");

  if (blog_id) {
    const response = await fetch("/api/blogs/delete", {
      method: "POST",
      body: JSON.stringify({ blog_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const updateBlogHandlers = async (event) => {
  event.preventDefault();
  const content = document.getElementById("updateContent").value.trim();
  const date = moment().format("YYYY-MM-DD");
  const id = document.getElementById("updateBlogBtn").getAttribute("value");
  console.log(id);

  if (updateContent) {
    const response = await fetch("/api/blogs/update", {
      method: "POST",
      body: JSON.stringify({ id, content, date }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".deleteBlog-form")
  .addEventListener("submit", deleteBlogHandlers);

document
  .querySelector(".updateBlog-form")
  .addEventListener("submit", updateBlogHandlers);
