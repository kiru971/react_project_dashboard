import { Divider, List, ListItem, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../../sharedComponents/theme";

export const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
  "&.active": {
    backgroundColor: "#1c1c21",
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export const DrawerButton = styled("button")({
  position: "fixed",
  backgroundColor: "white",
  top: "23px",
  padding: 4,
  zIndex: "99999",
  borderRadius: 6,
  borderStyle: "none",
  border: "0.1px solid grey",
  cursor: "pointer",
});
export const SideHead = styled(Typography)({
  fontWeight: "bold",
  height: 72,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export const SideDivider = styled(Divider)({
  borderStyle: "dashed",
  backgroundColor: "none",
  borderColor: theme.palette.secondary.contrastText,
  opacity: 0.5,
});
export const SideList = styled(List)({
  display: "flex",
  paddingTop: 32,
  flexDirection: "column",
  gap: 16,
});
export const SideListItem = styled(ListItem)({
  display: "flex",
  gap: 16,
  cursor: "pointer",
});
export const SideTitle = styled(Typography)({
  fontWeight: "thin",
  color: "#99a1b7",
  paddingTop: 40,
  paddingLeft: 16,
});
