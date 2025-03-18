import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  // ✅ Import SweetAlert2
import { addAdmin } from "../../api/api";

const AddNewAdmin = () => {
    const [form, setForm] = useState({ fullName: "", email: "", password: "" });
    const navigate = useNavigate();
    const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true";

    if (!isSuperAdmin) {
        return <Typography variant="h5">Unauthorized Access</Typography>;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addAdmin(form);

            // ✅ Show success alert using SweetAlert2
            Swal.fire({
                title: "Success!",
                text: "Admin added successfully",
                icon: "success",
                confirmButtonColor: "#007bff",
            }).then(() => {
                navigate("/admin/alladmin");
            });

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error.response?.data?.error || "Error adding admin",
                icon: "error",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" sx={{ my: 3, color: "#007bff" }}>Add New Admin</Typography>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth name="fullName" label="Full Name" onChange={handleChange} sx={{ mb: 2 }} />
                <TextField fullWidth name="email" label="Email" onChange={handleChange} sx={{ mb: 2 }} />
                <TextField fullWidth type="password" name="password" label="Password" onChange={handleChange} sx={{ mb: 2 }} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Admin</Button>
            </form>
        </Container>
    );
};

export default AddNewAdmin;
