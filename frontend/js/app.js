async function registerUser(username, password) {
  const res = await fetch("http://127.0.0.1:8000/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  alert(data.message || data.detail);
}

async function loginUser(username, password) {
  const res = await fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  alert(data.message || data.detail);
}