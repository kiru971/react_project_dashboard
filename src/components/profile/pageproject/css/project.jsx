import { Box, Button, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const ProjectPost = styled("small")({
  color: theme.palette.success.contrastText,
});
export const ProjectCard = styled(Card)({
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
});
export const ProjectBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 1.5rem 0px 1.5rem",
});
export const ProgressButton = styled(Button)({
  textTransform: "none",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: 10,
  border: "none",
});
export const ProjectSub = styled(Typography)({
  color: theme.palette.success.contrastText,
  fontWeight: "bold",
  marginBottom: 24,
});
export const ProjectButton = styled(Button)({
  textTransform: "none",
  border: "1px dashed #dbdfe9",
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "4px 20px 4px 12px",
});
export const ProjectInfo = styled("div")({
  color: theme.palette.success.contrastText,
  fontWeight: "bold",
});
export const BoxLayout = styled(Box)({
  display: "flex",
  gap: 24,
  flexWrap: "wrap",
});
export const ProjectProfile = styled("div")({
  width: 40,
  height: 45,
  backgroundColor: theme.palette.info.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const TooltipDiv = styled("div")({
  backgroundColor: "white",
  padding: 10,
  fontSize: 14,
  lineHeight: 2,
});
