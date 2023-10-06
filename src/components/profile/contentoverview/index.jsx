import React from "react";
import { Box, Typography } from "@mui/material";
import Chat from "../chat";
import Statistic from "../statistics";
import { BsFillGridFill, BsRecordCircleFill } from "react-icons/bs";
import { theme } from "../../../sharedComponents/theme";
import { activity } from "./data";
import { MdOutlineMaximize } from "react-icons/md";
import { data } from "../../dashboard/author/data";
import {
  AuthorBox,
  CardBox,
  ChatLayout,
  ContentMain,
  FooterLayout,
  MainCard,
} from "./css/content";
import { MemberTitle } from "../../dashboard/member/css/member";
import { CardSub } from "../../dashboard/footer/css/footer";
import { CardName, CardPost } from "../../dashboard/author/css/author";

const ContentOverview = () => {
  return (
    <ContentMain>
      <ChatLayout>
        <Chat />
      </ChatLayout>
      <FooterLayout>
        <Statistic />
        <MainCard>
          <CardBox>
            <div>
              <MemberTitle>Activities</MemberTitle>
              <CardSub component={"small"} variant="body2">
                890,344 Sales
              </CardSub>
            </div>
            <BsFillGridFill fill={theme.palette.primary.dark} size={23} />
          </CardBox>
          <Box sx={{ marginTop: 4 }}>
            {activity.map((value, index) => (
              <div key={index}>
                {index !== 0 && (
                  <MdOutlineMaximize
                    style={{
                      transform: "rotate(90deg)",
                      marginLeft: 25,
                    }}
                    size={35}
                    fill={theme.palette.secondary.contrastText}
                  />
                )}
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    <MemberTitle>{value.time}</MemberTitle>

                    <BsRecordCircleFill
                      fill={`${value.info}`}
                      style={{ marginTop: 2 }}
                    />
                  </div>
                  <Typography
                    component={"small"}
                    variant="body2"
                    sx={{
                      color:
                        value.id % 2 === 0
                          ? theme.palette.secondary.contrastText
                          : "black",
                    }}
                  >
                    {value.name}
                  </Typography>
                </div>
              </div>
            ))}
          </Box>
        </MainCard>
        <MainCard>
          <CardBox>
            <Typography
              style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}
            >
              Authors
            </Typography>
            <BsFillGridFill fill={theme.palette.primary.dark} size={23} />
          </CardBox>
          {data.map((val, item) => (
            <AuthorBox key={item}>
              <div style={{ maxWidth: 60, height: 60 }} className="mem">
                <img
                  src={`../${val.img}`}
                  alt="profile"
                  style={{ borderRadius: 7 }}
                />
              </div>
              <div style={{ paddingTop: "10px" }}>
                <CardName>{val.name}</CardName>
                <CardPost>{val.post}</CardPost>
              </div>
            </AuthorBox>
          ))}
        </MainCard>
      </FooterLayout>
    </ContentMain>
  );
};

export default ContentOverview;
