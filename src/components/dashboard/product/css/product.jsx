import { Box, Button, Card, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const ProductCard = styled(Card)({
  borderRadius: 10,
  height: 500,
  color: "black",
  padding: "1rem",
});
export const ProductButton = styled(Button)({
  border: "none",
  color: theme.palette.secondary.contrastText,
  fontWeight: "bold",
  fontSize: 12,
  "& .active": {
    color: theme.palette.primary.light,
  },
});
export const Logo = styled("div")({
  width: 40,
  height: 45,
  backgroundColor: theme.palette.info.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const PostBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontWeight: "bold",
});
