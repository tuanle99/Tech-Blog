const createBlogHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#createTitle").value.trim();
  const content = document.querySelector("#createContent").value.trim();

  const date = moment().format("YYYY-MM-DD");

  if (title && content) {
    const response = await fetch("/api/blogs/create", {
      method: "POST",
      body: JSON.stringify({ title, content, date }),
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
  .querySelector(".createBlog-form")
  .addEventListener("submit", createBlogHandler);
