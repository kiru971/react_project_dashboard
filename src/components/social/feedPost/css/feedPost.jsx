import { Button, Card, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const FeedPostCard = styled(Card)({
  padding: "0.5rem",
  marginTop: "2rem",
  borderRadius: 10,
});
export const PostCard = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 10,
});
export const ButtonLike = styled(Button)({
  textTransform: "none",
  color: theme.palette.info.dark,
  display: "flex",
  fontWeight: "bold",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 1,
  padding: "8px 8px",
});
export const TextWrite = styled("textarea")({
  flex: 1,
  borderRadius: 5,
  paddingTop: 15,
  paddingLeft: 10,
  color: theme.palette.warning.contrastText,
  backgroundColor: "#f9f9f9",
  border: "1px solid #f1f1f2",
  minWidth: 100,
});
export const PostName = styled("div")({
  fontWeight: 500,
  textTransform: "capitalize",
});
