import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
  Menu,
  ClickAwayListener,
  Avatar,
  Skeleton,
  ListItem,
  CssBaseline,
} from "@mui/material";
import { useNavigate, Outlet, Link, NavLink } from "react-router-dom";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDrawer from "@mui/material/Drawer";
import React, { useState, useEffect } from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles, withStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { ExpandCircleDown } from "@mui/icons-material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { ToastContainer } from "react-toastify";
import logo from "../asstes/evereset.png"
import logo1 from "../asstes/logo1.png"
const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true"; // Check if user is a super admin

// Active color ListItem start
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
}));

const CustomListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "var(--primary-color)",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "var(--primary-color)",
      color: "white",
      width: "90%",
      transition: "0.4s",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "var(--primary-color)",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(ListItem);

// Active color ListItem end

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  backgroundColor: "red", // Set the background color to red
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "red",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [manage, setManage] = useState(false);
  const [users, setUsers] = useState(false);
  const [bookings, setBookings] = useState(false);
  const [accounts, setAccounts] = useState(false);
  const [payment, setPayment] = useState(false);
  const [settings, setSettings] = useState(false);
  const [report, setReport] = useState(false);

  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [siteConfig, setSiteConfig] = useState({});

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [userData, setUserData] = useState([]);

  // todo: for mobile device
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleListItemClick = (event, index) => {


    setSelectedIndex(index);
    if (index === 1) {
      setOpen(true);
      setDashboard(!dashboard);
      setManage(false);
      setUsers(false);
      setBookings(false);
      setAccounts(false);
      setPayment(false);
      setSettings(false);
      setReport(false);
    } else if (index === 2) {
      setOpen(true);
      setDashboard(false);
      setManage(!manage);
      setUsers(false);
      setBookings(false);
      setAccounts(false);
      setPayment(false);
      setSettings(false);
      setReport(false);
    } else if (index === 3) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(!users);
      setBookings(false);
      setAccounts(false);
      setPayment(false);
      setSettings(false);
      setReport(false);
    } else if (index === 4) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(false);
      setBookings(!bookings);
      setAccounts(false);
      setPayment(false);
      setSettings(false);
      setReport(false);
    } else if (index === 5) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(false);
      setBookings(false);
      setAccounts(!accounts);
      setPayment(false);
      setSettings(false);
      setReport(false);
    } else if (index === 6) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(false);
      setBookings(false);
      setAccounts(false);
      setPayment(!payment);
      setSettings(false);
      setReport(false);
    } else if (index === 7) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(false);
      setBookings(false);
      setAccounts(false);
      setPayment(false);
      setSettings(!settings);
      setReport(false);
    } else if (index === 8) {
      setOpen(true);
      setDashboard(false);
      setManage(false);
      setUsers(false);
      setBookings(false);
      setAccounts(false);
      setPayment(false);
      setSettings(false);
      setReport(!report);
    }
  };

  console.log(open);

  const [subSelectedIndex, setSubSelectedIndex] = useState();
  const handleSubListItemClick = (event, index) => {
    // setSubSelectedIndex(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove auth token
    localStorage.removeItem("isSuperAdmin"); // Remove super admin status (if stored)

    navigate("/login"); // Correct way to navigate
  };
  return (
    <Box
      sx={{
        display: "flex",
        ".active": {
          backgroundColor: "#007bff !important",
          color: "#ffffff !important",
          paddingLeft: "0px !important",
          transition: "0.5s",
        },
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{ background: "#2c3e50" }}>
        <DrawerHeader
          sx={{
            display: "block",
            background: "#2c3e50",
            // borderRight: "2px solid var(--primary-color)",
            marginLeft: "8px",
            marginTop: "8px",
            borderRadius: "4px 4px 0px 0px",
          }}
          onClick={() => setOpen(!open)}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <MenuIcon
              style={{
                color: "white",
                fontSize: "23px",
                margin: "20px 15px 10px 15px",
              }}
            />
            <Box sx={{ height: "100px", width: "100%" }}><img style={{ height: "100%", width: "100%" }} src={logo1} /></Box>
          </Box>
        </DrawerHeader>

        <Box
          backgroundColor="#2c3e50"
          height="100vh"
          sx={{
            paddingTop: "30px",
            marginLeft: "8px",
            marginBottom: "8px",
            borderRadius: "0px 0px 4px 4px",
            // borderRight: "2px solid var(--primary-color)",
            overflow: "scroll",
            height: "100%",
            "&::-webkit-scrollbar-thumb": {
              display: "none !important",
              width: "0px important",
            },
            "&::-webkit-scrollbar-track": {
              display: "none !important",
            },
            "&::-webkit-scrollbar": {
              display: "none !important",
            },
          }}
        >
          <List className="side-ber">
            {/*************************** Main route Dashboard *************************/}
            <Link
              to="/admin/dashboard"
              style={{
                display: "block",
                textDecoration: "none",
                color: selectedIndex === 1 ? "white" : "#007bff",
                backgroundColor:
                  selectedIndex === 1 ? "#007bff" : "",
              }}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <CustomListItem
                selected={selectedIndex === 1}
                style={{ padding: "0px", width: "200px" }}
              >
                <Tooltip title={" Dashboard"}>
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <DashboardIcon
                      sx={{
                        fontSize: "22px",
                        mr: "10px",
                      }}
                    />

                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Dashboard
                    </ListItemText>
                  </ListItemButton>
                </Tooltip>
              </CustomListItem>
            </Link>


            {/*xxxxxxxxxxxxxxxxxxxxxxxx Dashboard Ends xxxxxxxxxxxxxxxxxxxxxxxx*/}

            {/*************************** Main route Manage *************************/}
            {/*************************** Main route Accounts *************************/}
            <Link
              to="/admin/reports"
              style={{
                display: "block",
                marginBottom: "10px",
                textDecoration: "none",
                color: selectedIndex === 8 ? "white" : "#007bff",
                backgroundColor:
                  selectedIndex === 8 ? "#007bff" : "",
              }}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItem
                selected={selectedIndex === 8}
                style={{ padding: "0px", width: "200px" }}
              >
                <Tooltip title={"Reports"}>
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <AssessmentIcon
                      sx={{
                        fontSize: "22px",
                        mr: "10px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Reports
                    </ListItemText>

                    <ExpandCircleDown
                      sx={{ mr: "20px", color: "var(--white)" }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>
            {isSuperAdmin && <Link
              to="/admin/alladmin"
              style={{
                display: "block",
                marginBottom: "10px",
                textDecoration: "none",
                color: selectedIndex === 4 ? "white" : "#007bff",
                backgroundColor:
                  selectedIndex === 4 ? "#007bff" : "",

              }}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItem style={{ padding: "0px", width: "200px" }}>
                <Tooltip title={"All Users"}>
                  <ListItemButton
                    selected={selectedIndex === 4}
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <SupervisorAccountIcon
                      sx={{
                        fontSize: "22px",
                        mr: "10px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      All Admin
                    </ListItemText>

                    <ExpandCircleDown
                      sx={{ mr: "20px", color: "var(--white)" }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>}
            <Link
              to="/admin/assessment"
              style={{
                display: "block",
                marginBottom: "10px",
                textDecoration: "none",
                color: selectedIndex === 3 ? "white" : "#007bff",
                backgroundColor:
                  selectedIndex === 3 ? "#007bff" : "",

              }}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItem style={{ padding: "0px", width: "200px" }}>
                <Tooltip title={"All Assessment"}>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <SupervisorAccountIcon
                      sx={{
                        fontSize: "18px",
                        mr: "10px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Assessment
                    </ListItemText>

                    <ExpandCircleDown
                      sx={{ mr: "20px", color: "var(--white)" }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>

            {/* Sub Menu Account Section end  */}

            {/*************************** Main route Accounts *************************/}
            <Link
              to="/admin/settings"
              style={{
                display: "block",
                marginBottom: "10px",
                textDecoration: "none",
                color: selectedIndex === 7 ? "white" : "#007bff",
                backgroundColor:
                  selectedIndex === 7 ? "#007bff" : "",
              }}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItem
                selected={selectedIndex === 7}
                style={{ padding: "0px", width: "200px" }}
              >
                <Tooltip title={"Settings"}>
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <SettingsIcon
                      sx={{
                        fontSize: "22px",
                        mr: "10px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Settings
                    </ListItemText>

                    <ExpandCircleDown
                      sx={{ mr: "20px", color: "var(--white)" }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Link>


            <ListItem
              onClick={handleLogout}
              style={{
                display: "block",
                marginTop: "180px",
                textDecoration: "none",
                color: "white",
                padding: "0px", width: "200px"

              }}

            >
              <Tooltip title={"Log Out"}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    p: "5px 3px 5px 20px",
                  }}
                >
                  <ExitToAppRoundedIcon
                    sx={{
                      fontSize: "23px",
                    }}
                  />
                  <ListItemText sx={{ opacity: open ? 1 : 0, ml: "17px" }}>
                    Log Out
                  </ListItemText>
                </ListItemButton>
              </Tooltip>
            </ListItem>

          </List>
        </Box>
      </Drawer>

      <Box component="main" flexGrow={1}>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Sidebar;
