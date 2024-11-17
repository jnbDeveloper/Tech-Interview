'use client';
import React from 'react';
import  { useState } from 'react';
 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert(`Login successful! Welcome, ${result.user.name}`);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Replace with your logo URL */}
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button className="continue-button" type="submit">
          Continue
        </button>

        <div className="or-divider">
          <span>- OR -</span>
        </div>

        <div className="social-login">
          <button type="button" className="apple-login">
            Continue with Apple
          </button>
          <button type="button" className="google-login">
            Continue with Google
          </button>
          <button type="button" className="facebook-login">
            Continue with Facebook
          </button>
        </div>

        <div className="sign-up">
          <span>Don’t have an account?</span>
          <a href="/signup"> Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
