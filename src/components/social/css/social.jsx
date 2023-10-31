import { Box, Card, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../../sharedComponents/theme";

export const AccountBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});
export const SocialCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: "2rem 0rem",
  borderRadius: 10,
});
export const SocialBox = styled(Box)({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: "0.5rem",
});
export const SocialTitle = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  fontWeight: "bold",
  textTransform: "capitalize",
});
export const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: theme.palette.secondary.contrastText,
  "&.active": {
    color: theme.palette.primary.main,
  },
  ":hover": {
    color: theme.palette.primary.main,
  },
});
export const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 16,
  flexWrap: "wrap",
});
export const BoxDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const FeedDiv = styled("div")({
  display: "flex",
  gap: 15,
  marginBottom: 20,
});
