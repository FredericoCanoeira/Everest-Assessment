import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const Admin = () => {
    const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/");

        const decoded = jwtDecode(token);
        if (decoded.role !== "superadmin") {
          alert("Access denied!");
          return navigate("/");
        }

        const res = await axios.get(`http://localhost:5000/api/admins`, { headers: { Authorization: token } });
        setAdmins(res.data);
      } catch (error) {
        alert("Error fetching admins");
      }
    };
    fetchAdmins();
  }, [navigate]);
  return (
    <div>
       <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {admins?.map(admin => (
            <tr key={admin?._id}>
              <td>{admin?.username}</td>
              <td>{admin?.email}</td>
              <td>{admin?.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }}>Logout</button>
    </div>
    </div>
  );
}

export default Admin;
