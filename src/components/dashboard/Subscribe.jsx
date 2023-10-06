import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { PlanDiv, PlanLine, SubscribeCard } from "./css/dashboard";

const Subscribe = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <SubscribeCard className="background">
      <Box sx={{ paddingLeft: 2 }}>
        <Typography
          sx={{
            fontSize: matches ? 20 : 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Try our all new Enviroment with
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: matches ? 20 : 30,
            fontWeight: "bold",
            display: "flex",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <PlanDiv>
            Pro Plan
            <PlanLine className="line"></PlanLine>
          </PlanDiv>
          for Free
        </Typography>

        <div style={{ textAlign: "center", marginTop: "3rem", fontSize: 15 }}>
          <a href="/">Upgrade Now</a>
        </div>
      </Box>
      <div>
        <img
          src={"./upgrade.svg"}
          alt="svg"
          style={{ verticalAlign: "middle" }}
        />
      </div>
    </SubscribeCard>
  );
};

export default Subscribe;
