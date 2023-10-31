import { Box, Button, Card, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const FeedCard = styled(Card)({
  padding: "0.5rem",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
export const FeedName = styled("div")({
  color: theme.palette.secondary.contrastText,
});
export const TextBox = styled("textarea")({
  width: "100%",
  height: 60,
  border: "none",
  textDecoration: "none",
  listStyle: "none",
  fontSize: 18,
  fontWeight: "normal",
  color: theme.palette.warning.contrastText,
});
export const BoxPost = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});
export const PostButton = styled(Button)({
  textTransform: "none",
  ":hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
});
