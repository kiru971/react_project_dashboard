import { Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { CardNumber, CardPercentage, CardProject } from "./css/dashboard";

const Cards = () => {
  return (
    <CardProject className="back">
      <div>
        <CardNumber>69</CardNumber>
        <Typography variant="small" component="div">
          Active Projects
        </Typography>
      </div>
      <div>
        <CardPercentage component={"div"}>
          43 Pending <div> 72%</div>
        </CardPercentage>
        <ProgressBar
          completed={72}
          bgColor="white"
          animateOnRender={true}
          height="10px"
        />
      </div>
    </CardProject>
  );
};

export default Cards;
