import React from "react";
import { Box, Divider } from "@mui/material";
import Author from "../author";
import Trend from "../trend";
import Product from "../product";
import { todo, trend } from "../trend/data";
import { theme } from "../../../sharedComponents/theme";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { areadata } from "./data";
import { BiSolidCheckbox } from "react-icons/bi";
import { grey } from "@mui/material/colors";
import {
  BoxMain,
  BoxTable,
  CardDiv,
  CardLayout,
  CardLine,
  CardPrice,
  CardSub,
  CardTrend,
  FooterMain,
  TrendMain,
  TrendProfile,
  TrendTitle,
} from "./css/footer";
import { CardHead, CardMain, CardName, CardPost } from "../author/css/author";
import Member from "../member";

const Footer = () => {
  return (
    <Box
      sx={{
        // display: "grid",
        //gridTemplateColumns: "minmax(30%,auto) minmax(60%,auto)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: 3,
        rowGap: 3,
      }}
    >
      <BoxMain>
        <Box sx={{ minWidth: "32%" }}>
          <CardMain>
            <CardHead>Todo</CardHead>

            {todo.map((value, index) => (
              <CardLayout key={index}>
                <CardDiv>
                  <CardLine
                    style={{ backgroundColor: `${value.info}` }}
                  ></CardLine>
                  <BiSolidCheckbox
                    size={35}
                    fill={grey[200]}
                    style={{ verticalAlign: "middle" }}
                  />
                  <div>
                    <CardName>{value.name}</CardName>
                    <CardPost>Due in {value.post}</CardPost>
                  </div>
                </CardDiv>
                <button
                  style={{
                    color: `${value.info}`,
                    backgroundColor: `${value.background}`,
                    border: "none",
                    padding: "5px",
                  }}
                >
                  New
                </button>
              </CardLayout>
            ))}
          </CardMain>
        </Box>
        <BoxTable>
          <Member />
        </BoxTable>
      </BoxMain>
      <FooterMain>
        <Box sx={{ minWidth: "32%", marginRight: "4px" }}>
          <Author />
        </Box>
        <Trend />
      </FooterMain>
      <BoxMain>
        <Box sx={{ minWidth: "32%" }}>
          <CardTrend>
            <Box sx={{ marginBottom: 3 }}>
              <TrendTitle>Trends</TrendTitle>
              <CardSub variant="body2" component={"small"}>
                Latest Trends
              </CardSub>
            </Box>
            <ResponsiveContainer width="100%" height="30%">
              <AreaChart width={300} height={20} data={areadata}>
                <Tooltip content={customTooltip} />

                <Area
                  type="monotone"
                  dataKey="uv"
                  label={"name"}
                  stroke={theme.palette.success.main}
                  strokeWidth={3}
                  fill={theme.palette.success.light}
                />
              </AreaChart>
            </ResponsiveContainer>
            <Box sx={{ marginTop: 3 }}>
              {trend.map((value, item) => (
                <TrendMain key={item}>
                  <div style={{ display: "flex", gap: 15 }}>
                    <TrendProfile>{value.logo}</TrendProfile>
                    <div style={{ paddingTop: "10px" }}>
                      <CardName>{value.name}</CardName>
                      <CardPost>{value.post}</CardPost>
                    </div>
                  </div>
                  <CardPrice>
                    <div style={{ padding: 7, fontSize: 12 }}>
                      {value.price}
                    </div>
                  </CardPrice>
                </TrendMain>
              ))}
            </Box>
          </CardTrend>
        </Box>
        <BoxTable>
          <Product />
        </BoxTable>
      </BoxMain>
    </Box>
  );
};

function customTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          fontSize: 14,
          lineHeight: 2,
        }}
      >
        <div>
          <b>{label}</b>
        </div>
        <Divider />
        <div>
          Net Profit: <b>${payload[0].value} thousands</b>
        </div>
      </div>
    );
  }
}

export default Footer;
