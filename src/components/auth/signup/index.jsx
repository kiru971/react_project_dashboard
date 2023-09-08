import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../../redux/slice/LoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../sharedComponents/theme";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { orange, red } from "@mui/material/colors";
import {
  CancelButton,
  FormButton,
  FormCheckBox,
  FormDiv,
  FormDivider,
  FormLabel,
  FormResult,
  FormSub,
  FormTitle,
  LeftBox,
  MainBox,
  RightBox,
  RightTitle,
  SubmitButton,
} from "../css/auth";
import { addSuggest } from "../../../redux/slice/SuggestSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    data = { ...data, img: data.img[0].name };

    const id = Date.now();
    let task = { ...data, id };
    dispatch(addUser(task));
    dispatch(addSuggest(task));
    setMessage("Registered Successful");
    reset();
    setTimeout(() => {
      navigate("/login");
    }, [1000]);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      return navigate("/dashboard");
    }
  });

  return (
    <MainBox>
      <LeftBox>
        <Box
          sx={{
            minWidth: "50%",
            paddingTop: 3,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Box>
            <FormTitle variant="h5">
              <b>Sign Up</b>
            </FormTitle>
            <FormSub variant="body2" component={"div"}>
              Your Social Campaigns
            </FormSub>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <FormButton>
              <FcGoogle size={20} style={{ marginRight: 10 }} /> Sign in with
              Google
            </FormButton>
            <FormButton>
              <AiFillApple fill="black" size={20} style={{ marginRight: 10 }} />
              Sign in with Apple
            </FormButton>
          </Box>
          <FormDivider>or with email</FormDivider>
          {message && <FormResult>{message}</FormResult>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FormLabel>First name</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.firstName?.message
                    ? "invalid"
                    : isDirty && getValues("firstName") && "valid"
                }`}
              >
                <input
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 symbols",
                    },
                  })}
                />
                {errors.firstName?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("firstName") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.firstName?.message && (
                <small style={{ color: red[400] }}>
                  {errors.firstName.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Last name</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.lastName?.message
                    ? "invalid"
                    : isDirty && getValues("lastName") && "valid"
                }`}
              >
                <input
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 symbols",
                    },
                  })}
                />
                {errors.lastName?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("lastName") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.lastName?.message && (
                <small style={{ color: red[400] }}>
                  {errors.lastName.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Role</FormLabel>
              <div>
                <select {...register("role")} className="form-control">
                  <option value="Developer">Developer</option>
                  <option value="Tester">Tester</option>
                  <option value="UI/UX designer">UI/UX designer</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Image</FormLabel>
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
            <div style={{ marginTop: 18 }}>
              <FormLabel>Email</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.email?.message
                    ? "invalid"
                    : isDirty && getValues("email") && "valid"
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Wrong email format",
                    },
                  })}
                />
                {errors.email?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("email") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.email?.message && (
                <small style={{ color: red[400] }}>
                  {errors.email.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Password</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.password?.message
                    ? "invalid"
                    : isDirty && getValues("password") && "valid"
                }`}
              >
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("password") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.password?.message && (
                <small style={{ color: red[400] }}>
                  {errors.password.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Confirm Password</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.confirmPassword?.message
                    ? "invalid"
                    : isDirty && getValues("confirmPassword") && "valid"
                }`}
              >
                <input
                  type="password"
                  placeholder="Password confirmation"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: {
                      matchPattern: (v) =>
                        v === getValues("password") ||
                        "Confirm Password does not match",
                    },
                  })}
                  style={{
                    color: theme.palette.warning.contrastText,
                  }}
                />
                {errors.confirmPassword?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("confirmPassword") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.confirmPassword?.message && (
                <small style={{ color: red[400] }}>
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>

            <FormCheckBox>
              <input
                type="checkbox"
                {...register("checkbox", { required: true })}
              />
              <small>
                I Accept the <a href="/">Terms</a>.
              </small>
            </FormCheckBox>
            <SubmitButton type="submit" variant="contained" disabled={!isValid}>
              Submit
            </SubmitButton>
            <CancelButton onClick={() => navigate("/login")}>
              Cancel
            </CancelButton>
          </form>
        </Box>
      </LeftBox>
      <RightBox className="loginback">
        <Box>
          <RightTitle>
            <div className="metronic">
              <img src="./custom-1.png" alt="metronic" />
            </div>

            <div className="screen">
              <img src="./auth-screens.png" alt="screen" />
            </div>

            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              variant="h4"
            >
              Fast, Efficient and Productive
            </Typography>
            <Typography
              sx={{ color: "white", textAlign: "center" }}
              variant="small"
              component={"small"}
            >
              In this kind of post,{" "}
              <span style={{ color: orange[200] }}>the blogger</span> introduces
              a person they've interviewed
              <p>
                and provides some background information about the interviewee
                and their
              </p>
              work following this is a transcrit of the interview
            </Typography>
          </RightTitle>
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default Signup;
