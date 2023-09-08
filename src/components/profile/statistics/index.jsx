import { Box, Divider } from "@mui/material";
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { theme } from "../../../sharedComponents/theme";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { month } from "./data";
import { CardBox, MainCard } from "../contentoverview/css/content";
import { MemberTitle } from "../../dashboard/member/css/member";
import { CardSub } from "../../dashboard/footer/css/footer";
import { TooltipDiv } from "../pageproject/css/project";

const Statistic = () => {
  return (
    <MainCard>
      <CardBox>
        <div>
          <MemberTitle>Recent Statistics</MemberTitle>
          <CardSub component={"small"} variant="body2">
            More than 400 new members
          </CardSub>
        </div>
        <BsFillGridFill fill={theme.palette.primary.dark} size={23} />
      </CardBox>
      <Box sx={{ marginTop: 5 }}>
        <ResponsiveContainer width="90%" height={350}>
          <BarChart width={400} height={300} data={month} barSize={12}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              scale="point"
              padding={{ left: 30, right: 10 }}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip content={customTooltip} />
            <Bar dataKey="uv" fill="rgb(62, 151, 255)" />
            <Bar dataKey="pv" fill="rgb(219, 223, 233)" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </MainCard>
  );
};

function customTooltip({ active, payload, label }) {
  if (active) {
    return (
      <TooltipDiv>
        <div>
          <b>{label}</b>
        </div>
        <Divider />
        <div>
          Net Profit: <b>${payload[0].value} thousands</b>
        </div>
        <div>
          Revenue: <b>${payload[1].value} thousands</b>
        </div>
      </TooltipDiv>
    );
  }
}

export default Statistic;
