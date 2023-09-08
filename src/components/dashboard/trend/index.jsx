import { Box } from "@mui/material";
import React from "react";
import { data } from "./data";
import Notification from "../Notification";
import { TrendBox, TrendsCard } from "./css/trend";
import { CardName, CardPost } from "../author/css/author";
import { CardPrice, TrendProfile, TrendTitle } from "../footer/css/footer";

const Trend = () => {
  return (
    <>
      <Box sx={{ minWidth: "31%" }}>
        <Notification />
      </Box>
      <TrendsCard>
        <Box sx={{ marginBottom: 3 }}>
          <TrendTitle>Trends</TrendTitle>
          <CardPost>Latest tech trends</CardPost>
        </Box>
        {data.map((value, index) => (
          <TrendBox key={index}>
            <div style={{ display: "flex", gap: 15 }}>
              <TrendProfile>{value.logo}</TrendProfile>
              <div style={{ paddingTop: "10px" }}>
                <CardName>{value.name}</CardName>
                <CardPost>{value.post}</CardPost>
              </div>
            </div>
            <CardPrice>{value.price}</CardPrice>
          </TrendBox>
        ))}
      </TrendsCard>
    </>
  );
};

export default Trend;
