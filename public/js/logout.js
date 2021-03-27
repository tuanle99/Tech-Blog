const logout = async () => {
  const resposne = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (resposne.ok) {
    document.location.replace("/");
  } else {
    alert(resposne.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);
