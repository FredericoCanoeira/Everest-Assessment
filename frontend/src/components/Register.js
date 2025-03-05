import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation after registration
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "../styles/Register.css"; // Import CSS file

function Register() {
  const [email, setEmail] = useState(""); // State for storing email
  const [password, setPassword] = useState(""); // State for storing password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for storing confirm password
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Registration handler function (you can expand this to make an API call)
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation: Check if email and password are entered and if passwords match
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        // Redirect to the login page after successful registration
        navigate("/login");
      } else {
        alert("Passwords do not match!"); // Alert if passwords don't match
      }
    } else {
      alert("Please fill in all fields."); // Alert if fields are empty
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required
            />
          </div>

          <div className="button-group">
            <button className="btn-register" type="submit">Register</button>
          </div>
        </form>

        <div className="auth-options">
          <p>Already have an account? <Link to="/login" className="auth-link">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
