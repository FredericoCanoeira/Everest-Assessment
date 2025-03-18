import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import commaNumber from "comma-number";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard = () => {


  return (
    <Box sx={{
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      height: "100vh",  // Full viewport height
      width: "100%",
      mt:"50px"

    }}>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item md={3}>
              {/* iteam-1 */}
              <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", p: "15px", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ color: "#AFB5C3", fontWeight: 600, fontSize: "16px" }}>Today's money</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ color: "#344767", fontWeight: 600, fontSize: "18px" }}>{`$${commaNumber(500030)}`}</Typography>
                      <Typography sx={{ color: "#86D71D", fontWeight: 600 }}>+55%</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "#007bff", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AttachMoneyIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              {/* iteam-1 */}
              <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", p: "15px", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ color: "#AFB5C3", fontWeight: 600, fontSize: "16px" }}>today's users</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ color: "#344767", fontWeight: 600, fontSize: "18px" }}>{`$${commaNumber(500030)}`}</Typography>
                      <Typography sx={{ color: "#86D71D", fontWeight: 600 }}>+55%</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "#007bff", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <PersonIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              {/* iteam-1 */}
              <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", p: "15px", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ color: "#AFB5C3", fontWeight: 600, fontSize: "16px" }}>New clients</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ color: "#344767", fontWeight: 600, fontSize: "18px" }}>{`$${commaNumber(500030)}`}</Typography>
                      <Typography sx={{ color: "red", fontWeight: 600 }}>-02%</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "#007bff", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <EmojiEventsIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              {/* iteam-1 */}
              <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", p: "15px", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ color: "#AFB5C3", fontWeight: 600, fontSize: "16px" }}>Sales</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography sx={{ color: "#344767", fontWeight: 600, fontSize: "18px" }}>{`$${commaNumber(500030)}`}</Typography>
                      <Typography sx={{ color: "#007bff", fontWeight: 600 }}>+5%</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ background: "#007bff", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>


    </Box>
  );
};

export default Dashboard;
