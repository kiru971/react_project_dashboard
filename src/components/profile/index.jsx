import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../sharedComponents/theme";
import { FaFilter } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { Outlet, useLocation } from "react-router-dom";
import {
  BoxHead,
  BoxSide,
  BoxTitle,
  CreateButton,
} from "../dashboard/css/dashboard";
import {
  BoxMiddle,
  ButtonFollow,
  HireButton,
  Layout,
  LayoutTitle,
  LinkBox,
  ProfileBox,
  ProfileCard,
  ProfileDetail,
  ProfileDiv,
  ProfileImage,
  ProfileLayout,
  ProfileLeft,
  ProfileName,
  ProfileTitle,
  StyledLink,
  UserHead,
  UserSub,
} from "./css/profile";
import { CardSub } from "../dashboard/footer/css/footer";

const Profile = () => {
  const item = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const locationName = location.pathname.slice(17);

  return (
    <>
      <BoxHead>
        <div>
          <BoxTitle>{locationName}</BoxTitle>
          <UserHead variant="body2" component={"small"}>
            <UserSub>Profile -</UserSub>
            {locationName}
          </UserHead>
        </div>
        <BoxSide>
          <Typography sx={{ display: "flex", gap: 1 }}>
            <FaFilter color="grey" style={{ marginTop: 4 }} /> Filter
          </Typography>
          <CreateButton>Create</CreateButton>
        </BoxSide>
      </BoxHead>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <ProfileCard>
          <ProfileLeft>
            <ProfileImage className="profile">
              <img src={`../../${item[0].img}`} alt="profile" />
            </ProfileImage>
            <ProfileLayout>
              <ProfileDiv>
                <ProfileBox>
                  <ProfileName>
                    {item[0].firstName}&nbsp;
                    {item[0].lastName}
                    <FcApproval size={20} />
                  </ProfileName>
                  <ProfileDetail>
                    <ProfileTitle variant="small" component={"div"}>
                      <RiAccountCircleFill
                        size={19}
                        color={theme.palette.success.contrastText}
                      />
                      {item[0].role}
                    </ProfileTitle>
                    <ProfileTitle variant="small" component={"div"}>
                      <IoMailSharp
                        size={18}
                        color={theme.palette.success.contrastText}
                      />
                      {item[0].email}
                    </ProfileTitle>
                  </ProfileDetail>
                </ProfileBox>
                <div>
                  <ButtonFollow>Follow</ButtonFollow>
                  <HireButton>Hire Me</HireButton>
                </div>
              </ProfileDiv>
              <BoxMiddle>
                <Layout>
                  <LayoutTitle variant="h6">
                    <IoMdArrowUp fill={theme.palette.success.main} size={18} />
                    4500$
                  </LayoutTitle>
                  <CardSub>Earnings</CardSub>
                </Layout>
                <Layout>
                  <LayoutTitle variant="h6">
                    <IoMdArrowDown
                      fill={theme.palette.secondary.main}
                      size={18}
                    />
                    75
                  </LayoutTitle>
                  <CardSub>Projects</CardSub>
                </Layout>
                <Layout>
                  <LayoutTitle variant="h6">
                    <IoMdArrowUp fill={theme.palette.success.main} size={18} />
                    60%
                  </LayoutTitle>
                  <CardSub>Success Rate</CardSub>
                </Layout>
              </BoxMiddle>
            </ProfileLayout>
          </ProfileLeft>
          <LinkBox>
            <Typography>
              <StyledLink to={"/crafted/profile/overview"}>Overview</StyledLink>
            </Typography>
            <Typography>
              <StyledLink to={"/crafted/profile/project"}> Projects</StyledLink>
            </Typography>
            <Typography>Campaigns</Typography>
            <Typography>Documents</Typography>
            <Typography>Connections</Typography>
          </LinkBox>
        </ProfileCard>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
