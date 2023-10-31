import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { useForm } from "react-hook-form";
import { RiAccountCircleFill } from "react-icons/ri";

const FirstStep = ({ handleNext }) => {
  const { handleSubmit } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    handleNext();
  };
  return (
    <>
      <Box sx={{ paddingBottom: "3rem" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
          Project Type
        </Typography>
        <span
          style={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          If you need more info, please check out FAQ Page
        </span>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          sx={{
            textTransform: "none",
            color: "black",
            border: "1px dashed #3e97ff",
            width: "100%",
            backgroundColor: theme.palette.primary.light,
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            padding: "1.5rem",
            gap: 2,
          }}
        >
          <RiAccountCircleFill size={35} color={theme.palette.primary.main} />

          <label>
            <Typography sx={{ fontSize: 18, textAlign: "left" }}>
              Personal Project
            </Typography>
            <span style={{ color: theme.palette.secondary.contrastText }}>
              If you need more info, please check it out
            </span>
          </label>
        </Button>
        <Box sx={{ display: "flex", justifyContent: "end", marginTop: 5 }}>
          <Button
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
            onClick={handleNext}
          >
            Project Settings
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FirstStep;
