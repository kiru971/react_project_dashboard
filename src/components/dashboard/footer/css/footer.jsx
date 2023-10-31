import { Box, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const BoxMain = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  columnGap: 28,
  rowGap: 16,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const CardLayout = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const CardDiv = styled("div")({
  paddingTop: "10px",
  display: "flex",
  alignItems: "center",
});
export const CardLine = styled("div")({
  height: "50px",
  width: "5px",
  borderRadius: 10,
});
export const CardPrice = styled("div")({
  backgroundColor: theme.palette.info.contrastText,
  fontSize: 14,
  color: theme.palette.info.dark,
});
export const BoxTable = styled(Box)({
  minWidth: "65.8%",
});
export const FooterMain = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  columnGap: 25,
  rowGap: 16,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const CardTrend = styled(Card)({
  borderRadius: 10,
  height: 500,
  padding: "1rem",
});
export const TrendTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: 20,
});
export const CardSub = styled(Typography)({
  color: theme.palette.secondary.contrastText,
});

export const TrendMain = styled(Box)({
  display: "flex",
  gap: 16,
  paddingBottom: 16,
  justifyContent: "space-between",
  alignItems: "center",
});

export const TrendProfile = styled("div")({
  width: 50,
  height: 50,
  backgroundColor: theme.palette.info.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
