import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Divider,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import { FaArrowUp, FaFilter } from "react-icons/fa";
import React from "react";
import Cards from "./Card";
import Subscribe from "./Subscribe";
import { IoOpenSharp } from "react-icons/io5";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Footer from "./footer";
import { theme } from "../../sharedComponents/theme";
import {
  AvatarProfile,
  BoxHead,
  BoxSub,
  ButtonCreate,
  CardAmount,
  CardDesign,
  CardHeader,
  CardInside,
  CardStyle,
  Content,
  HeroBox,
  LeafLine,
  LinkCard,
  LinkTitle,
  Main,
  PercentDiv,
  PercentSub,
  PercentTitle,
  PieBox,
  PieDiv,
  PieLayout,
  SectionTitle,
} from "./css/dashboard";
import { CardSub } from "./footer/css/footer";
import { FormDiv } from "../auth/css/auth";

const Section = () => {
  const data02 = [
    { name: "A1", value: 200 },
    { name: "A2", value: 200 },
    { name: "B1", value: 350 },
  ];
  const COLORS = ["rgb(228, 230, 239)", "#3e97ff", "#50cd89"];
  return (
    <>
      <BoxHead>
        <SectionTitle>Dashboard</SectionTitle>
        <BoxSub>
          <Typography sx={{ display: "flex", gap: 1 }}>
            <FaFilter
              fill={theme.palette.success.contrastText}
              style={{ marginTop: 4 }}
            />
            Filter
          </Typography>
          <ButtonCreate>Create</ButtonCreate>
        </BoxSub>
      </BoxHead>
      <Main>
        <Content>
          <Box sx={{ rowGap: 2, display: "grid" }}>
            <Cards />
            <CardDesign>
              <div>
                <Typography sx={{ fontSize: 26, fontWeight: "bold" }}>
                  357
                </Typography>
                <CardSub variant="small" component="div">
                  Professionals
                </CardSub>
              </div>
              <HeroBox>
                <Typography>Today's Heroes</Typography>

                <AvatarGroup
                  max={6}
                  total={47}
                  sx={{
                    "& .MuiAvatarGroup-avatar": {
                      width: 35,
                      height: 35,
                      fontSize: 17,
                    },
                  }}
                >
                  <Tooltip title="Alan Warden">
                    <AvatarProfile sx={{ bgcolor: "#ffc700" }} alt="Remy Sharp">
                      A
                    </AvatarProfile>
                  </Tooltip>
                  <Tooltip title="Michael Eberon">
                    <AvatarProfile src="./300-11.jpg" alt="role" />
                  </Tooltip>
                  <Tooltip title="Susan Redwood">
                    <AvatarProfile
                      sx={{
                        bgcolor: theme.palette.primary.main,
                      }}
                      alt="Remy Sharp"
                    >
                      S
                    </AvatarProfile>
                  </Tooltip>
                  <Tooltip title="Melody Macy">
                    <AvatarProfile alt="Remy Sharp" src="./300-2.jpg" />
                  </Tooltip>
                  <Tooltip title="Perry Matthew">
                    <AvatarProfile
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                      }}
                      alt="Remy Sharp"
                    >
                      P
                    </AvatarProfile>
                  </Tooltip>
                  <Tooltip title="Barry Walter">
                    <AvatarProfile alt="Remy Sharp" src="./300-6.jpg" />
                  </Tooltip>
                </AvatarGroup>
              </HeroBox>
            </CardDesign>
          </Box>
          <Box sx={{ rowGap: 2, display: "grid" }}>
            <CardHeader>
              <CardInside>
                <CardStyle>
                  <div style={{ color: theme.palette.success.contrastText }}>
                    $
                  </div>
                  <PercentTitle>69,700</PercentTitle>
                  <PercentDiv>
                    <FaArrowUp /> 2.2%
                  </PercentDiv>
                </CardStyle>
                <PercentSub variant="body2" component="small">
                  Projects Earnings in April
                </PercentSub>
              </CardInside>
              <PieBox>
                <ResponsiveContainer width="35%" height="70%">
                  <PieChart width={300} height={40}>
                    <Pie
                      data={data02}
                      dataKey="value"
                      cx="40%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={30}
                      paddingAngle={0}
                    >
                      {data02.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <PieLayout>
                  <FormDiv>
                    <PieDiv>
                      <LeafLine className="div"></LeafLine>
                      <CardSub variant="body2" component={"small"}>
                        Leaf CRM
                      </CardSub>
                    </PieDiv>
                    <CardAmount variant="body2" component={"small"}>
                      $7,660
                    </CardAmount>
                  </FormDiv>
                  <FormDiv>
                    <PieDiv>
                      <div
                        className="div"
                        style={{
                          backgroundColor: theme.palette.primary.main,
                          border: "none",
                          verticalAlign: "middle",
                        }}
                      ></div>
                      <CardSub variant="body2" component={"small"}>
                        Mivy App
                      </CardSub>
                    </PieDiv>
                    <CardAmount variant="body2" component={"small"}>
                      $2,820
                    </CardAmount>
                  </FormDiv>
                  <FormDiv>
                    <PieDiv>
                      <div
                        className="div"
                        style={{
                          backgroundColor: "rgb(228, 230, 239)",
                        }}
                      ></div>
                      <CardSub variant="body2" component={"small"}>
                        Others
                      </CardSub>
                    </PieDiv>
                    <CardAmount variant="body2" component={"small"}>
                      $45,257
                    </CardAmount>
                  </FormDiv>
                </PieLayout>
              </PieBox>
            </CardHeader>

            <LinkCard>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                External Links
              </Typography>
              <Box sx={{ marginTop: 1, color: "#3e97ff" }}>
                {[
                  "Avg.Client Rating",
                  "Instagram Followers",
                  "Google Ads CPC",
                ].map((text, item) => (
                  <div key={item}>
                    <LinkTitle>
                      <a href="/">{text}</a>
                      <IoOpenSharp fill={grey[300]} size={20} />
                    </LinkTitle>
                    <Divider sx={{ borderStyle: "dashed" }} />
                  </div>
                ))}
              </Box>
            </LinkCard>
          </Box>
        </Content>

        <Subscribe />
      </Main>
      <Box sx={{ maxWidth: "100%" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Section;
