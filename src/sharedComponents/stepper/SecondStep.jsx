import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { theme } from "../theme";
import { red } from "@mui/material/colors";

const SecondStep = ({ handleBack, handleNext, setAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAdd(data);
    handleNext();
  };
  return (
    <>
      <Box sx={{ paddingBottom: "3rem" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
          Project Settings
        </Typography>
        <span
          style={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          If you need more info, please check Project Guidelines
        </span>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label style={{ fontWeight: 400 }} className="required">
            Project Name
          </label>
          <div className="stepForm">
            <input
              type="text"
              placeholder="Enter Project Name"
              {...register("title", {
                required: "Project name is required",
              })}
            />
            {errors.title?.message && (
              <small style={{ color: red[400] }}>{errors.title.message}</small>
            )}
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <label style={{ fontWeight: 400 }} className="required">
            Project Description
          </label>
          <div className="stepForm">
            <input
              type="textarea"
              {...register("description", {
                required: "Project description is required",
              })}
            />
          </div>
          {errors.description?.message && (
            <small style={{ color: red[400] }}>
              {errors.description.message}
            </small>
          )}
        </div>
        <div style={{ marginTop: 20 }}>
          <label style={{ fontWeight: 400 }} className="required">
            Due Date
          </label>
          <div className="stepForm">
            <input
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
            />
          </div>
          {errors.date?.message && (
            <small style={{ color: red[400] }}>{errors.date.message}</small>
          )}
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
          }}
        >
          <Button
            color="inherit"
            onClick={handleBack}
            sx={{
              mr: 1,
              color: theme.palette.info.dark,
              backgroundColor: "#f9f9f9",
              padding: "0.5rem 1rem",
              textTransform: "none",
              fontSize: 15,
              borderRadius: 2,
            }}
          >
            Project Type
          </Button>
          <Button
            type="submit"
            sx={{
              color: "white",
              backgroundColor: theme.palette.primary.main,
              textTransform: "none",
              borderRadius: 2,
              padding: "0.5rem 1rem",
              fontSize: 15,
              ":hover": {
                color: "white",
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Budget
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SecondStep;
