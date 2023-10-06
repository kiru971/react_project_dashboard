import { Button, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const CardSuggest = styled(Card)({
  padding: "2rem 1rem",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  height: 485,
  overflow: "auto",
});
export const SuggestTitle = styled(Typography)({
  fontWeight: "bold",
  textTransform: "capitalize",
});
export const FollowButton = styled(Button)({
  textTransform: "none",
  color: theme.palette.info.dark,
  backgroundColor: "#f9f9f9",
});
