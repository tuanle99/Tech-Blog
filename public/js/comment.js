const createCommentHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector("#comment_content").value.trim();
  const date = moment().format("YYYY-MM-DD");

  if (content && date) {
    const response = await fetch("/api/blogs/createComment", {
      method: "POST",
      body: JSON.stringify({ content, date }),
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
  .querySelector(".addComment-form")
  .addEventListener("submit", createCommentHandler);
