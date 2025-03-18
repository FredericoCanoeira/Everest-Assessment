import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAdmins, deleteAdmin } from "../../api/api";

const AllAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [showPassword, setShowPassword] = useState({});
    const navigate = useNavigate();
    const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true"; // Check if user is a super admin

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const { data } = await getAdmins();
            setAdmins(data);
        } catch (error) {
            Swal.fire("Error", "Error fetching admins", "error");
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This admin will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#007bff",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteAdmin(id);
                    fetchAdmins();
                    Swal.fire("Deleted!", "Admin has been deleted.", "success");
                } catch (error) {
                    Swal.fire("Error!", "Error deleting admin.", "error");
                }
            }
        });
    };

    const togglePasswordVisibility = (id) => {
        setShowPassword(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
console.log(admins)
    return (
        <Box sx={{ mt: "50px" }}>
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#007bff", fontSize: "20px", fontWeight: 600 }}>
                        All Admin
                    </Typography>

                    {isSuperAdmin && (
                        <Typography onClick={() => navigate("/admin/addnewadmin")} sx={{ color: "white", fontSize: "15px", cursor: "pointer", borderRadius: "5px", p: "5px", fontWeight: 600, background: "#007bff" }}>
                            Add New Admin
                        </Typography>
                    )}
                </Box>

                <TableContainer component={Paper} sx={{ mt: "20px" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Full Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Password</strong></TableCell>
                                <TableCell><strong>Created Date</strong></TableCell>
                                {isSuperAdmin && <TableCell>Actions</TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {admins.map((admin) => (
                                <TableRow key={admin._id}>
                                    <TableCell>{admin?.fullName}</TableCell>
                                    <TableCell>{admin?.email}</TableCell>
                                    <TableCell>
                                        <TextField
                                            type={showPassword[admin._id] ? "text" : "password"}
                                            value={showPassword[admin._id] ? admin?.password : "********"} // Show actual temp password if visible
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => togglePasswordVisibility(admin._id)}>
                                                            {showPassword[admin._id] ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            sx={{ width: "150px" }}
                                            disabled
                                        />
                                    </TableCell>
                                    <TableCell>{new Date(admin.createdAt).toLocaleDateString()}</TableCell>
                                    {isSuperAdmin && (
                                        <TableCell>
                                            <IconButton color="error" onClick={() => handleDelete(admin._id)}>
                                                <DeleteIcon sx={{ cursor: "pointer" }} />
                                            </IconButton>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default AllAdmin;
