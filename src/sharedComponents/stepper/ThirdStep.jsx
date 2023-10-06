import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { theme } from "../theme";
import { red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/slice/ProjectSlice";

const ThirdStep = ({ handleBack, handleNext, add, setAdd }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data = { ...data, img: data.img[0].name };
    const finalData = Object.assign(data, add);
    dispatch(addProject(finalData));
    handleNext();
  };
  return (
    <>
      <Box sx={{ paddingBottom: "3rem" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
          Budget
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
            Budget
          </label>
          <div className="stepForm">
            <input
              type="number"
              placeholder="Enter Budget"
              {...register("budget", {
                required: "Budget is required",
                min: {
                  value: 100,
                  message: "The budget amount must be greater than 100",
                },
              })}
              min={50}
            />
          </div>
          {errors.budget?.message && (
            <small style={{ color: red[400] }}>{errors.budget.message}</small>
          )}
        </div>
        <div style={{ marginTop: 20 }}>
          <label>Image</label>
          <div style={{ marginTop: 10 }}>
            <input
              type="file"
              {...register("img", {
                required: "Recipe picture is required",
              })}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
            flexWrap: "wrap",
            gap: 2,
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
            Project Settings
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
            Completed
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ThirdStep;
