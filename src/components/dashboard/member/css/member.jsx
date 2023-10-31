import { Button, Card, TableCell, Typography, styled } from "@mui/material";
import { theme } from "../../../../sharedComponents/theme";

export const MemberCard = styled(Card)({
  borderRadius: 10,
  height: 500,
  color: "black",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
});
export const MemberLayout = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export const MemberTitle = styled(Typography)({
  fontWeight: "bold",
});
export const MemberButton = styled(Button)({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  textTransform: "none",
  fontSize: 15,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: " white",
  },
});

export const HeadData = styled(TableCell)({
  padding: 10,
  borderBottom: "1px dashed rgba(224, 224, 224, 1)",
  color: theme.palette.secondary.contrastText,
});
export const TableData = styled(TableCell)({
  padding: 10,
  borderBottom: "1px dashed rgba(224, 224, 224, 1)",
});
export const CellHead = styled("div")({
  display: "flex",
  gap: 10,
});
export const CellName = styled("div")({
  display: "flex",
  flexDirection: "column",
});
export const CellSub = styled("small")({
  color: theme.palette.secondary.contrastText,
});
export const TableButton = styled("button")({
  border: "none",
  padding: "5px",
});
export const TrashButton = styled("button")({
  border: "none",
  padding: "5px",
  marginLeft: "10px",
});
