import { Box, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "../../../sharedComponents/theme";
import { grey } from "@mui/material/colors";

export const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: theme.palette.warning.contrastText,
  fontWeight: "bold",
  padding: 10,
  borderRadius: 7,
  "&.active": {
    color: theme.palette.primary.main,
    backgroundColor: grey[100],
  },
  ":hover": {
    color: theme.palette.primary.main,
    backgroundColor: grey[100],
  },
});
export const NavTitle = styled(Typography)({
  color: theme.palette.warning.contrastText,
  fontWeight: "bold",
});
export const NavRightBox = styled(Box)({
  display: "flex",
  gap: 24,
  justifyContent: "center",
  alignItems: "center",
});
