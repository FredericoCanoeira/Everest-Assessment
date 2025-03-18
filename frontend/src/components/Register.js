import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation after registration
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "../styles/Register.css"; // Import CSS file
import axios from "axios";
import Swal from "sweetalert2"; // Corrected SweetAlert2 import

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation after registration

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await axios.post("http://localhost:5000/register-super-admin", { fullName, email, password });
      Swal.fire("Success", "Super Admin Registered Successfully", "success");
      navigate("/login");
    } catch (error) {
      console.error("❌ Registration Error:", error.response?.data);
      Swal.fire("Error", error.response?.data?.error || "Registration Failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="email">Full Name:</label>
            <input
              name="fullName"
              type="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button className="btn-register" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
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
