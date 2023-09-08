import { Box, Button, Card, IconButton, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { theme } from "../../../../sharedComponents/theme";

export const ChatCard = styled(Card)({
  borderRadius: 10,
  padding: "1.5rem",
});
export const ChatBox = styled("div")({
  display: "flex",
  gap: 15,
  alignItems: "center",
});
export const CommentButton = styled(Button)({
  backgroundColor: grey[100],
  color: theme.palette.secondary.contrastText,
  display: "flex",
  gap: 1,
  "&:hover": {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main,
  },
});
export const LikeButton = styled(Button)({
  backgroundColor: grey[100],
  color: theme.palette.secondary.contrastText,
  display: "flex",
  gap: 1,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
  },
});
export const CommentBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 2,
});
export const ButtonIcon = styled(IconButton)({
  color: theme.palette.secondary.contrastText,
  border: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "white",
  },
});
