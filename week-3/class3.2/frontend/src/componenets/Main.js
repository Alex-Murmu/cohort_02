import React, { useState } from 'react';

function Main() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function jama() {
    fetch("http://localhost:2000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          alert("Login Successful! Token: " + data.token);
        } else {
          alert(data.message || "Login Failed!");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={jama}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Main;
