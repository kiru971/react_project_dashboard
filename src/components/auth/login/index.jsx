import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { orange, red } from "@mui/material/colors";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "./login.css";
import { theme } from "../../../sharedComponents/theme";
import {
  FormButton,
  FormDetail,
  FormDiv,
  FormDivider,
  FormLabel,
  FormSub,
  FormSubmit,
  FormTitle,
  LeftBox,
  MainBox,
  RightBox,
  RightHead,
  RightSub,
  RightTitle,
} from "../css/auth";
import { addFollowing, updateSuggest } from "../../../redux/slice/SuggestSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
  const user = useSelector((state) => state.user.taskList);
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  const schema = yup.object({
    email: yup
      .string()
      .email("Wrong email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const check = user.find(
      (val) => val.email === data.email && val.password === data.password
    );
    if (check) {
      const detail = user.filter(
        (val) => val.email === data.email && val.password === data.password
      );
      sessionStorage.setItem("user", JSON.stringify(detail));
      navigate("/dashboard");
      const item = JSON.parse(sessionStorage.getItem("user"));
      dispatch(updateSuggest({ id: item[0].id }));
      dispatch(addFollowing({ name: item[0].firstName }));
    } else {
      setMessage("The login details are incorrect");
    }
  };
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("user")))
      return navigate("/dashboard");
  }, []);

  return (
    <MainBox>
      <LeftBox
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            minWidth: "50%",
            paddingBottom: 20,
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <Box>
            <FormTitle variant="h4">
              <b>Sign In</b>
            </FormTitle>
            <FormSub variant="body2" component={"div"}>
              Your Social Campaigns
            </FormSub>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <FormButton>
              <FcGoogle size={20} style={{ marginRight: 10 }} />
              Sign in with Google
            </FormButton>
            <FormButton>
              <AiFillApple fill="black" size={20} style={{ marginRight: 10 }} />
              Sign in with Apple
            </FormButton>
          </Box>
          <FormDivider>or with email</FormDivider>
          {message && <FormDetail>{message}</FormDetail>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FormLabel>Email</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.email?.message
                    ? "invalid"
                    : isDirty && getValues("email") && "valid"
                }`}
              >
                <input {...register("email")} placeholder="Email" />
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
            <div style={{ marginTop: 20 }} className="form">
              <FormLabel>Password</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.password?.message
                    ? "invalid"
                    : isDirty && getValues("password") && "valid"
                }`}
              >
                <input type="password" {...register("password")} />
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
            <FormSubmit type="submit" value="Continue" />
          </form>
          <div style={{ textAlign: "center" }}>
            Not a Member yet?{" "}
            <NavLink to={"/register"} style={{ cursor: "pointer" }}>
              Sign up
            </NavLink>
          </div>
        </Box>
      </LeftBox>
      <RightBox className="loginback">
        <RightTitle>
          <div className="metronic">
            <img src="./custom-1.png" alt="metronic" />
          </div>

          <div className="screen">
            <img src="./auth-screens.png" alt="screen" />
          </div>

          <RightHead variant="h4">Fast, Efficient and Productive</RightHead>
          <RightSub variant="small" component={"small"}>
            In this kind of post,{" "}
            <span style={{ color: orange[200] }}>the blogger</span> introduces a
            person they've interviewed
            <p>
              and provides some background information about the interviewee and
              their
            </p>
            work following this is a transcrit of the interview
          </RightSub>
        </RightTitle>
      </RightBox>
    </MainBox>
  );
};

export default LoginForm;
