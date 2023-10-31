import { Box, Drawer, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { theme } from "../../sharedComponents/theme";
import { FaFilter, FaScroll } from "react-icons/fa";
import { PiRowsFill } from "react-icons/pi";
import { RiAccountCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Suggestion from "./suggestion";
import { UserHead, UserSub } from "../profile/css/profile";
import {
  BoxHead,
  BoxSide,
  BoxTitle,
  CreateButton,
} from "../dashboard/css/dashboard";
import {
  AccountBox,
  BoxDiv,
  FeedDiv,
  LayoutBox,
  SocialBox,
  SocialCard,
  SocialTitle,
  StyledLink,
} from "./css/social";
import { CardSub } from "../dashboard/footer/css/footer";

const Social = () => {
  const item = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();
  const value = useSelector((state) => state.feed.value);
  const followCount = useSelector((state) => state.suggest.followCount);
  const following = useSelector((state) => state.suggest.following);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const match = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [toggle, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const locationName = location.pathname.slice(16);
  const [open] = useOutletContext();

  const list = () => {
    return (
      <SocialCard>
        <SocialBox>
          <div className="social">
            <img src={`${item[0].img}`} alt="profile" />
          </div>
          <SocialTitle>
            {item[0].firstName}&nbsp;
            {item[0].lastName}
          </SocialTitle>
        </SocialBox>
        <LayoutBox>
          <BoxDiv>
            <div style={{ fontSize: 18 }}>
              {value.find(
                (val) => val.name === item[0].firstName + " " + item[0].lastName
              )
                ? value.map((val) => {
                    if (
                      val.name ===
                      item[0].firstName + " " + item[0].lastName
                    ) {
                      return val.count;
                    } else return 0;
                  })
                : 0}
            </div>
            <CardSub component={"small"} variant="small">
              POSTS
            </CardSub>
          </BoxDiv>
          <BoxDiv>
            <div style={{ fontSize: 18 }}>
              {following?.find((index) => index.id === item[0].firstName)
                ? following.map((show) => {
                    if (show.id === item[0].firstName) {
                      return show.count;
                    }
                  })
                : 0}
            </div>
            <CardSub component={"small"} variant="small">
              FOLLOWERS
            </CardSub>
          </BoxDiv>
          <BoxDiv>
            <div style={{ fontSize: 18 }}>
              {followCount?.find((index) => index.id === item[0].id)
                ? followCount.map((show) => {
                    if (show.id === item[0].id) {
                      return show.count;
                    } else return 0;
                  })
                : 0}
            </div>
            <CardSub component={"small"} variant="small">
              FOLLOWING
            </CardSub>
          </BoxDiv>
        </LayoutBox>
        <Box sx={{ marginTop: 2 }}>
          <StyledLink to={"/crafted/social/feeds"}>
            <FeedDiv>
              <Box
                sx={{
                  height: "25px",
                  width: "4px",
                  borderRadius: 10,
                  backgroundColor:
                    location.pathname.includes("feeds") &&
                    theme.palette.primary.main,
                }}
              ></Box>
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PiRowsFill size={22} />
                <Typography>Feeds</Typography>
              </div>
            </FeedDiv>
          </StyledLink>
          <StyledLink to={"/crafted/social/followers"}>
            <div style={{ display: "flex", gap: 15 }}>
              <div
                style={{
                  height: "25px",
                  width: "4px",
                  borderRadius: 10,
                  backgroundColor:
                    location.pathname.includes("followers") &&
                    theme.palette.primary.main,
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                <RiAccountCircleFill size={22} />
                <Typography>Followers</Typography>
              </div>
            </div>
          </StyledLink>
        </Box>
      </SocialCard>
    );
  };

  return (
    <>
      <BoxHead>
        <div>
          <BoxTitle>Social {locationName}</BoxTitle>
          <UserHead variant="body2" component={"small"}>
            <UserSub>Home -</UserSub>
            Social
          </UserHead>
        </div>
        <BoxSide>
          <Typography sx={{ display: "flex", gap: 1 }}>
            <FaFilter color="grey" style={{ marginTop: 4 }} /> Filter
          </Typography>
          <CreateButton>Create</CreateButton>
        </BoxSide>
      </BoxHead>
      <AccountBox>
        {match ? (
          <div style={{ display: "flex", gap: 12 }}>
            {matches && (
              <RiAccountCircleFill
                size={23}
                color={theme.palette.secondary.contrastText}
                onClick={() => setOpen(!toggle)}
              />
            )}
            <FaScroll
              onClick={() => setShow(!show)}
              size={23}
              color={theme.palette.secondary.contrastText}
            />
          </div>
        ) : (
          ""
        )}
      </AccountBox>
      <Box>
        <Grid container spacing={2}>
          {matches ? (
            <Drawer
              anchor={"left"}
              open={toggle}
              onClose={() => setOpen(!toggle)}
              sx={{ "& .MuiDrawer-paper": { width: 280 } }}
            >
              {list()}
            </Drawer>
          ) : (
            <Grid item lg={3.5} xs={12} md={open ? 5 : 6}>
              {list()}
            </Grid>
          )}
          <Grid item lg={5} xs={12} md={open ? 7 : 6}>
            <Outlet />
          </Grid>
          {match ? (
            <Drawer
              anchor={"right"}
              open={show}
              onClose={() => setShow(!show)}
              sx={{ "& .MuiDrawer-paper": { width: 280 } }}
            >
              <Suggestion />
            </Drawer>
          ) : (
            <Grid item lg={3.5} xs={12} md={open ? 5 : 3.5}>
              <Suggestion />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Social;
