import { Box, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const CardMain = styled(Card)({
  borderRadius: 10,
  height: 500,
  padding: "2rem",
});

export const CardHead = styled(Typography)({
  fontWeight: "bold",
  fontSize: 20,
  marginBottom: 15,
});

export const CardTitle = styled(Box)({
  display: "flex",
  gap: 15,
  paddingBottom: 17,
});
export const CardImage = styled("div")({
  maxWidth: 60,
  height: 60,
});
export const CardPost = styled("small")({
  color: theme.palette.secondary.contrastText,
});
export const CardName = styled("div")({
  fontWeight: "bold",
});
