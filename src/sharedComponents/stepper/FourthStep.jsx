import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

const FourthStep = ({ handleReset }) => {
  return (
    <>
      <Box sx={{ paddingBottom: "3rem", textAlign: "center" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
        >
          Project Created!
        </Typography>
        <span
          style={{
            color: theme.palette.secondary.contrastText,
            textAlign: "center",
          }}
        >
          If you need more info, please check Project Guidelines
        </span>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="inherit"
          sx={{
            mr: 1,
            color: theme.palette.info.dark,
            backgroundColor: "#f9f9f9",
            padding: "0.5rem 1.3rem",
            textTransform: "none",
            fontSize: 16,
            borderRadius: 2,
          }}
          onClick={handleReset}
        >
          Create New Project
        </Button>
        <Button
          type="submit"
          sx={{
            color: "white",
            backgroundColor: theme.palette.primary.main,
            textTransform: "none",
            borderRadius: 2,
            padding: "0.5rem 1.3rem",
            fontSize: 16,
            ":hover": {
              color: "white",
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          View Project
        </Button>
      </Box>
    </>
  );
};

export default FourthStep;
