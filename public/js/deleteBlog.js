const deleteBlogHandlers = async (event) => {
  event.preventDefault();
  const blog_id = document
    .getElementById("deleteBlogBtn")
    .getAttribute("value");
  console.log(blog_id);

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

document
  .querySelector(".deleteBlog-form")
  .addEventListener("submit", deleteBlogHandlers);
