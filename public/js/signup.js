const createuserHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signup_name").value.trim();
  const email = document.querySelector("#signup_email").value.trim();
  const password = document.querySelector("#signup_password").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
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
  .querySelector(".signup-form")
  .addEventListener("submit", createuserHandler);
