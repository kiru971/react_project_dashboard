import { Avatar, Box, Button, Card, Typography, styled } from "@mui/material";
import { theme } from "../../../sharedComponents/theme";

export const CardProject = styled(Card)({
  borderRadius: 10,
  height: 230,
  backgroundColor: "rgb(241, 65, 108)",
  color: "white",
  padding: "1.5rem",
  paddingLeft: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const CardNumber = styled(Typography)({
  fontSize: 35,
  fontWeight: "bold",
});

export const CardPercentage = styled(Typography)({
  marginBottom: 8,
  display: "flex",
  justifyContent: "space-between",
});
export const BoxHead = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
export const SectionTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: 18,
});
export const BoxSub = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 40,
});
export const ButtonCreate = styled("div")({
  textTransform: "none",
  backgroundColor: theme.palette.primary.dark,
  border: "none",
  color: "white",
  padding: "8px 12px",
  fontSize: 15,
  borderRadius: 6,
});
export const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "100%",
  rowGap: 13,
  columnGap: 24,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
export const Content = styled(Box)(({ theme }) => ({
  display: "grid",
  columnGap: 24,
  rowGap: 16,
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "minmax(48%,auto) minmax(45%,auto)",
  },
  minWidth: "50%",
}));
export const CardDesign = styled(Card)({
  borderRadius: 10,
  height: 235,
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const HeroBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
});
export const CardHeader = styled(Card)({
  borderRadius: 10,
  height: 230,
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
});
export const CardInside = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  paddingLeft: 15,
});
export const CardStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 5,
});
export const PercentDiv = styled("div")({
  color: theme.palette.success.main,
  backgroundColor: theme.palette.success.light,
});

export const PercentTitle = styled(Typography)({
  fontSize: 30,
  fontWeight: "bold",
});
export const PercentSub = styled(Typography)({
  color: theme.palette.success.contrastText,
});
export const PieBox = styled(Box)({
  display: "flex",
  height: 450,
  marginTop: 3,
});
export const NotifyCard = styled(Card)({
  borderRadius: 10,
  height: 500,
  minWidth: "32%",
  padding: "1rem",
});
export const AvatarProfile = styled(Avatar)({
  width: 24,
  height: 24,
});
export const PieDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
export const LeafLine = styled("div")({
  backgroundColor: theme.palette.success.main,
  border: "none",
  verticalAlign: "middle",
});
export const CardAmount = styled(Typography)({
  color: theme.palette.warning.contrastText,
  fontWeight: "bold",
});
export const LinkCard = styled(Card)({
  borderRadius: 10,
  height: 235,
  padding: "1.5rem",
});
export const LinkTitle = styled(Typography)({
  padding: "8px 0px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: 15,
});
export const PieLayout = styled("div")({
  width: "60%",
  marginTop: 3,
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export const SubscribeCard = styled(Card)({
  borderRadius: 10,
  height: 480,
  minWidth: "48%",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});
export const PlanDiv = styled("div")({
  color: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const PlanLine = styled("div")({
  backgroundColor: theme.palette.secondary.light,
});
export const BoxTitle = styled(Typography)({
  fontWeight: "bold",
  textTransform: "capitalize",
});
export const BoxSide = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 24,
});
export const CreateButton = styled(Button)({
  textTransform: "none",
  backgroundColor: theme.palette.primary.dark,
  border: "none",
  color: "white",
  padding: "5px 10px",
  fontSize: 15,
  borderRadius: 6,
});
