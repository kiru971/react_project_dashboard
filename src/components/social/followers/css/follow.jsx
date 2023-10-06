import { Button, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const FollowersCard = styled(Card)({
  padding: "0.5rem",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: 15,
  height: 200,
});
export const FollowTitle = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
});
export const FollowRole = styled(Typography)({
  textAlign: "center",
  color: theme.palette.secondary.contrastText,
});
export const FollowingButton = styled(Button)({
  textTransform: "none",
  backgroundColor: theme.palette.primary.light,
});
