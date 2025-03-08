import React, { useState } from 'react';
import './Header.css'; // Assuming you have some basic CSS for styling

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., login logic
    console.log('Form submitted:', { email, password });
    // You can add further logic for authentication
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log into Facebook</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="forgot-password">
          <a href="/">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
