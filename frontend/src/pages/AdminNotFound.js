import React from 'react';
import notFoundImage from "../asstes/Error-404-Page-Not-Found.png"

const AdminNotFound = () => {
    return (
        <div >
            <Box sx={{ display: "flex", alignItems: "center", justifiyContent: "center" }}>
                <Box>
                    <img src={notFoundImage} />
                </Box>
            </Box>
        </div>
    );
}

export default AdminNotFound;
