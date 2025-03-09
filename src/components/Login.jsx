import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

const Login = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent page reload
    navigate("/main");  // ✅ Redirect to main page
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Enter your credentials to access your account</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required placeholder="Enter your password" />
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">
              Sign In
              <span className="arrow">→</span>
            </button>

            <p className="signup-prompt">
              Don't have an account? 
              <a href="#" className="signup-link">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
