import { Box, Card, styled } from "@mui/material";

export const ContentMain = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: 24,
  rowGap: 16,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const MainCard = styled(Card)({
  borderRadius: 10,
  padding: "1.5rem",
});
export const CardBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const AuthorBox = styled(Box)({
  display: "flex",
  gap: 16,
  paddingBottom: 16,
});
export const ChatLayout = styled(Box)({
  flex: 1.5,
  display: "flex",
  rowGap: 24,
  flexDirection: "column",
});
export const FooterLayout = styled(Box)({
  flex: 1.4,
  display: "flex",
  flexDirection: "column",
  rowGap: 24,
});
