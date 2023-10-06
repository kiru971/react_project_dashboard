import { Box, Card, styled } from "@mui/material";

export const TrendsCard = styled(Card)({
  borderRadius: 10,
  height: 500,
  padding: "2rem",
  minWidth: "32.8%",
});

export const TrendBox = styled(Box)({
  display: "flex",
  gap: 16,
  paddingBottom: 16,
  justifyContent: "space-between",
  alignItems: "center",
});
