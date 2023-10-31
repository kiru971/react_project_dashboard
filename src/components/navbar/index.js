import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ImStatsBars } from "react-icons/im";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { grey } from "@mui/material/colors";
import Side from "../sidebar/Side";
import { AiOutlineMenu } from "react-icons/ai";
import { theme } from "../../sharedComponents/theme";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./css/navbar.css";
import { BiSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { resetSuggest } from "../../redux/slice/SuggestSlice";
import { NavRightBox, NavTitle, StyledLink } from "./css/navbar";
import { addMode } from "../../redux/slice/ModeSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = JSON.parse(sessionStorage.getItem("user"));
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const routeLast = location.pathname.slice(1, 8);
  const dispatch = useDispatch();
  const match = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const darkMode = useSelector((state) => state.mode.darkMode);

  const handleOpenUserMenu = (event) => {
    if (!item?.[0]) {
      alert("Please Login");
      navigate("/login");
    } else {
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawerWidth = open ? 275 : 75;
  const matches = useMediaQuery((theme) => theme.breakpoints.down(950));
  /*const AppMain = styled(AppBar)(({ theme }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: ` ${drawerWidth}px`,
    position: "fixed",
    [theme.breakpoints.down(950)]: {
      width: "100%",
      marginLeft: 0,
    },
  }));*/

  const handleClose = () => {
    setOpen(!open);
  };
  const handleOut = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    dispatch(resetSuggest());
    navigate("/login");
    sessionStorage.clear();
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar elevation={0}>
          <Toolbar
            sx={{
              marginLeft: matches ? 0 : `${drawerWidth}px`,
              display: "flex",
              justifyContent: matches ? "start" : "space-between",
              backgroundColor: "white",
              color: theme.palette.success.contrastText,
              padding: "1rem",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 3, paddingLeft: 2 }}>
              {matches ? (
                <AiOutlineMenu onClick={handleOut} />
              ) : (
                <>
                  <NavTitle>
                    <StyledLink to="dashboard" onClick={scrollUp}>
                      Dashboard
                    </StyledLink>
                  </NavTitle>
                  <NavTitle>Layout Builder</NavTitle>
                  <NavTitle>
                    <StyledLink
                      to="/crafted/profile/overview"
                      onClick={scrollUp}
                      sx={{
                        color:
                          routeLast === "crafted"
                            ? theme.palette.primary.main
                            : theme.palette.warning.contrastText,
                        backgroundColor:
                          routeLast === "crafted" ? grey[100] : "",
                      }}
                    >
                      Crafted
                    </StyledLink>
                  </NavTitle>
                  <NavTitle>Apps</NavTitle>
                  <NavTitle>Mega menu</NavTitle>
                </>
              )}
            </Box>
            <NavRightBox>
              <CiSearch />
              <ImStatsBars />
              <MdOutlineDashboardCustomize />
              <PiChatCenteredTextLight />
              <BiSun
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(addMode())}
              />
              <div>
                <IconButton
                  className="nav"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                >
                  <img
                    src={`${item ? item[0].img : "noUser.jpg"}`}
                    alt="download"
                  />
                </IconButton>
                {anchorElUser && (
                  <Menu
                    sx={{ mt: "40px" }}
                    disableScrollLock
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                )}
              </div>
            </NavRightBox>
          </Toolbar>
        </AppBar>

        <Side
          drawerWidth={drawerWidth}
          open={matches ? show : open}
          handleClose={handleClose}
          handleOut={handleOut}
        />
      </Box>
      <Box
        sx={{
          marginLeft: matches ? 0 : ` ${drawerWidth}px`,
          marginTop: 9,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: match ? "1rem" : "2rem",
          maxWidth: "100%",
          backgroundColor: "whitesmoke",
          minHeight: "100vh",
        }}
      >
        <Outlet context={[open]} />
      </Box>
    </>
  );
};

export default Navbar;
