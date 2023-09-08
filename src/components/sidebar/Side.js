import { Drawer, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdDashboardCustomize } from "react-icons/md";
import { RiAccountCircleFill, RiLayout5Fill } from "react-icons/ri";
import { VscError } from "react-icons/vsc";
import {
  PiArrowLineLeft,
  PiArrowLineRightBold,
  PiChatCenteredTextLight,
} from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { IoIosSwitch } from "react-icons/io";
import {
  DrawerButton,
  SideDivider,
  SideHead,
  SideList,
  SideListItem,
  SideTitle,
  StyledLink,
} from "./css/side";

const Side = ({ open, drawerWidth, handleClose, handleOut }) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down(950));
  const location = useLocation();
  const routeLast = location.pathname.slice(
    1,
    location.pathname.lastIndexOf("/")
  );

  return (
    <>
      <Drawer
        variant={!matches ? "permanent" : "persistent"}
        open={open}
        anchor="left"
        sx={{
          minWidth: drawerWidth,
          "& .MuiDrawer-paper": {
            minWidth: drawerWidth,
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {!matches && (
          <DrawerButton
            style={{
              left: open ? "265px" : "60px",
            }}
          >
            {!open ? (
              <PiArrowLineRightBold
                size={16}
                color="skyblue"
                onClick={handleClose}
              />
            ) : (
              <PiArrowLineLeft size={16} color="grey" onClick={handleClose} />
            )}
          </DrawerButton>
        )}
        <SideHead variant="h6">
          {open ? (
            <div style={{ display: "flex" }}>
              <div>
                <img src="../../default-small.svg" alt="metronic" />
              </div>
              Metronic
            </div>
          ) : null}
          {matches ? <div onClick={handleOut}>X</div> : null}
        </SideHead>
        <SideDivider />
        <SideList
          sx={{
            paddingLeft: open ? 3 : "10px",
            paddingRight: open ? 3 : 0,
          }}
        >
          <StyledLink to={"dashboard"}>
            <SideListItem
              disablePadding
              sx={{
                justifyContent: !open ? "center" : "initial",
                paddingLeft: open ? 2 : 1,
              }}
            >
              <RxDashboard size={23} color="grey" />
              <Typography style={{ fontSize: 18 }}>
                {open ? "Dashboard" : null}
              </Typography>
            </SideListItem>
          </StyledLink>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <IoIosSwitch size={23} color="grey" />
            <Typography style={{ fontSize: 18 }}>
              {open ? "Layout Builder" : null}
            </Typography>
          </SideListItem>
          <SideTitle variant="body2">{open ? "CRAFTED" : null}</SideTitle>
          <StyledLink
            to="/crafted/profile/overview"
            sx={{
              backgroundColor: routeLast === "crafted/profile" ? "#1c1c21" : "",
              paddingBottom: routeLast === "crafted/profile" && "5px",
              paddingTop: routeLast === "crafted/profile" && "5px",
            }}
          >
            <SideListItem
              disablePadding
              sx={{
                justifyContent: !open ? "center" : "initial",
                paddingLeft: open ? 2 : 1,
              }}
            >
              <MdDashboardCustomize size={23} color="grey" />

              <Typography style={{ fontSize: 18 }}>
                {open ? "Profile" : null}
              </Typography>
            </SideListItem>
          </StyledLink>
          <StyledLink
            to={"crafted/social/feeds"}
            sx={{
              backgroundColor:
                location.pathname.includes("social") && "#1c1c21",
              paddingBottom: location.pathname.includes("social") && "5px",
              paddingTop: location.pathname.includes("social") && "5px",
            }}
          >
            <SideListItem
              disablePadding
              sx={{
                justifyContent: !open ? "center" : "initial",

                paddingLeft: open ? 2 : 1,
              }}
            >
              <RiAccountCircleFill size={23} color="grey" />

              <Typography style={{ fontSize: 18 }}>
                {open ? "Social" : null}
              </Typography>
            </SideListItem>
          </StyledLink>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <VscError size={23} fill="grey" />
            <Typography style={{ fontSize: 18 }}>
              {open ? "Errors" : null}
            </Typography>
          </SideListItem>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <RiLayout5Fill size={23} color="grey" />
            <Typography style={{ fontSize: 18 }}>
              {open ? "Widgets" : null}
            </Typography>
          </SideListItem>

          <SideTitle variant="body2">{open ? "APPS" : null}</SideTitle>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <PiChatCenteredTextLight size={23} color="grey" />{" "}
            <Typography style={{ fontSize: 18 }}>
              {open ? "Chat" : null}
            </Typography>
          </SideListItem>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <Typography style={{ fontSize: 18 }}>
              {open ? "User management" : null}
            </Typography>
          </SideListItem>
          <SideListItem
            disablePadding
            sx={{
              justifyContent: !open ? "center" : "initial",
              paddingLeft: open ? 2 : 1,
            }}
          >
            <Typography style={{ fontSize: 18 }}>
              {open ? "Changelog v8.2.0" : null}
            </Typography>
          </SideListItem>
        </SideList>
      </Drawer>
    </>
  );
};

export default Side;
