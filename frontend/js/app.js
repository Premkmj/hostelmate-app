const backendURL = "https://your-backend.onrender.com";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch(`${backendURL}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.message || data.detail;
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("logUsername").value;
  const password = document.getElementById("logPassword").value;

  const res = await fetch(`${backendURL}/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.message || data.detail;
});
