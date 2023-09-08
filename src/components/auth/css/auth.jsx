import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { theme } from "../../../sharedComponents/theme";

export const RightBox = styled("div")(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    alignItems: "center",
  },
}));

export const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "1.5rem",
  gap: 5,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const FormTitle = styled(Typography)({
  textAlign: "center",
  fontWeight: 500,
  marginBottom: 1,
});
export const FormSub = styled(Typography)({
  textAlign: "center",
  color: theme.palette.secondary.contrastText,
});

export const FormButton = styled(Button)({
  flex: 1,
  textTransform: "none",
  border: "1px solid",
  borderColor: "#dbdfe9",
});

export const FormDetail = styled("small")({
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.main,
  padding: "1rem",
  border: "1px solid red",
  borderRadius: 7,
});

export const FormLabel = styled("label")({
  fontWeight: 500,
});

export const FormDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export const FormSubmit = styled("input")({
  width: "100%",
  marginTop: 20,
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: "white",
  padding: "0.5rem",
  fontSize: 20,
  borderRadius: 7,
  cursor: "pointer",
});
export const RightTitle = styled(Box)({
  display: "flex",
  padding: "5rem",
  height: "100vh",
  flexDirection: "column",
  alignItems: "center",
  gap: 15,
});

export const RightHead = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
});

export const RightSub = styled(Typography)({
  color: "white",
  textAlign: "center",
});

export const FormDivider = styled(Divider)({
  color: theme.palette.secondary.contrastText,
});

export const FormResult = styled("small")({
  backgroundColor: theme.palette.info.light,
  color: theme.palette.info.main,
  padding: "1rem",
  borderRadius: 7,
});

export const FormCheckBox = styled("div")({
  marginTop: 15,
  fontWeight: "300",
  fontSize: 17,
  display: "flex",
  alignItems: "center",
});

export const SubmitButton = styled(Button)({
  width: "100%",
  color: "white",
  textTransform: "none",
  marginTop: 12,
});

export const CancelButton = styled(Button)({
  marginTop: 15,
  width: "100%",
  textTransform: "none",
  backgroundColor: theme.palette.primary.light,
});
