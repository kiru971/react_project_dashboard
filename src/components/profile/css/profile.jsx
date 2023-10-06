import { Box, Button, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../sharedComponents/theme";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

export const ProfileCard = styled(Card)({
  borderRadius: 10,
  padding: "1.5rem",
  display: "flex",
  gap: 20,
  flexDirection: "column",
});
export const ProfileLayout = styled("div")({
  flex: 5,
  display: "flex",
  flexDirection: "column",
  gap: 30,
});
export const ProfileDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  rowGap: 15,
});
export const ButtonFollow = styled(Button)({
  textTransform: "none",
  backgroundColor: theme.palette.info.contrastText,
  border: "none",
  color: theme.palette.secondary.contrastText,
  padding: "5px 10px",
  fontSize: 15,
  borderRadius: 6,
});
export const HireButton = styled(Button)({
  textTransform: "none",
  backgroundColor: theme.palette.primary.dark,
  border: "none",
  color: "white",
  padding: "5px 10px",
  fontSize: 15,
  borderRadius: 6,
  marginLeft: 8,
});
export const ProfileName = styled(Typography)({
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: 16,
  fontSize: 25,
});
export const ProfileBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 5,
});
export const ProfileTitle = styled(Typography)({
  color: theme.palette.success.contrastText,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  display: "flex",
  gap: "3px",
});
export const UserHead = styled(Typography)({
  display: "flex",
  gap: "5px",
  textTransform: "capitalize",
});
export const UserSub = styled("p")({
  color: theme.palette.secondary.contrastText,
});
export const ProfileImage = styled("div")(({ theme }) => ({
  width: "160px",
  height: "170px",
  [theme.breakpoints.down("md")]: {
    height: "130px",
    width: "120px",
  },
}));
export const ProfileLeft = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 15,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: "black",
  borderRadius: 7,
  "&.active": {
    color: theme.palette.primary.main,
  },
  ":hover": {
    color: theme.palette.primary.main,
  },
});
export const LinkBox = styled(Box)({
  display: "flex",
  gap: 40,
  minWidth: 50,
  overflow: "auto",
});
export const BoxMiddle = styled(Box)({
  display: "flex",
  gap: 24,
  flexWrap: "wrap",
});
export const Layout = styled("div")({
  border: "1px dashed",
  borderColor: grey[300],
  borderRadius: 7,
  padding: "0.5rem 1rem",
  width: "140px",
});
export const LayoutTitle = styled(Typography)({
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: 8,
});
export const ProfileDetail = styled("div")({
  display: "flex",
  gap: 15,
  flexWrap: "wrap",
});
