import { blue, green } from "@mui/material/colors";
import { FaKickstarterK, FaTelegram } from "react-icons/fa";
import { PiPinterestLogoBold } from "react-icons/pi";
import { ImVimeo } from "react-icons/im";
import { CgFigma } from "react-icons/cg";
import { theme } from "../../../sharedComponents/theme";

export const telegram = <FaTelegram color={blue[300]} size={25} />;
export const pinterest = (
  <PiPinterestLogoBold fill={theme.palette.secondary.dark} size={25} />
);
export const vimeo = <ImVimeo fill={theme.palette.primary.dark} size={23} />;
export const kick = (
  <FaKickstarterK fill={theme.palette.success.dark} size={23} />
);
export const figma = <CgFigma color={green[300]} size={28} />;

export const data = [
  {
    id: 1,
    name: "Top Authors",
    post: "Mark,Rowling,Esther",
    logo: telegram,
    price: "+82$",
  },
  {
    id: 2,
    name: "Popular Authors",
    post: "Randy,steve,Mike",
    logo: pinterest,
    price: "+280$",
  },
  {
    id: 3,
    name: "New Users",
    post: "John,pat,Jimmy",
    logo: vimeo,
    price: "+4500$",
  },
  {
    id: 4,
    name: "Active Customers",
    post: "Mark,Rowling,Esther",
    logo: vimeo,
    price: "+4500$",
  },
  {
    id: 5,
    name: "Bestseller Theme",
    post: "Disco,Retro,Sports",
    logo: kick,
    price: "+4500$",
  },
];

export const approve = theme.palette.success.main;
export const progress = theme.palette.warning.main;
export const success = theme.palette.primary.main;
export const danger = theme.palette.secondary.main;
export const safe = theme.palette.info.main;
export const approved = theme.palette.success.light;
export const progressed = theme.palette.warning.light;
export const successful = theme.palette.primary.light;
export const dangers = theme.palette.secondary.light;
export const safer = theme.palette.info.light;

export const product = [
  {
    id: 1,
    name: "Brad Simmons",
    post: "Movie Creator",
    language: "React,HTML",
    logo: pinterest,
    status: "Approved",
    info: approve,
    background: approved,
  },
  {
    id: 2,
    name: "Popular Authors",
    post: "Most Successful",
    language: "Python,MySOL",
    logo: telegram,
    status: "In Progress",
    info: progress,
    background: progressed,
  },

  {
    id: 3,
    name: "New Users",
    post: "Awesome Users",
    language: "Laravel,Metronic",
    logo: vimeo,
    status: "Success",
    info: success,
    background: successful,
  },
  {
    id: 4,
    name: "Active Customers",
    post: "Movie Creator",
    language: "AngularJS,C#",
    logo: vimeo,
    status: "Rejected",
    info: danger,
    background: dangers,
  },
  {
    id: 5,
    name: "Bestseller Theme",
    post: "Best Customers",
    language: "ReactJS,Ruby",
    logo: kick,
    status: "In progress",
    info: progress,
    background: progressed,
  },
];

export const trend = [
  {
    id: 1,
    name: "Top Authors",
    post: "Ricky Hunt,Sandra Trepp",
    logo: pinterest,
    price: "+82$",
  },
  {
    id: 2,
    name: "Popular Authors",
    post: "Randy,steve,Mike",
    logo: figma,
    price: "+82$",
  },
  {
    id: 3,
    name: "Top Engagement",
    post: "John,pat,Jimmy",
    logo: vimeo,
    price: "+82$",
  },
];

export const todo = [
  {
    id: 1,
    name: "Create FireStone Logo",
    post: "2 Days",
    info: approve,
    background: approved,
  },
  {
    id: 2,
    name: "Stakeholder Meeting",
    post: "3 Days",
    info: success,
    background: successful,
  },
  {
    id: 3,
    name: "Scoping & Estimations",
    post: "5 Days",
    info: progress,
    background: progressed,
  },
  {
    id: 4,
    name: "KPI App Showcase",
    post: "12 Days",
    info: success,
    background: successful,
  },
  {
    id: 5,
    name: "Project Meeting",
    post: "12 Days",
    info: danger,
    background: dangers,
  },
  {
    id: 6,
    name: "Customers Update",
    post: "1 week",
    info: approve,
    background: approved,
  },
];

export const notification = [
  {
    id: 1,
    name: "Group lunch celebration",
    post: "2 Days",
    info: progress,
    background: progressed,
    percent: "+28%",
  },
  {
    id: 2,
    name: "Navigation optimization",
    post: "2 Days",
    info: approve,
    background: approved,
    percent: "+50%",
  },
  {
    id: 3,
    name: "Rebrand strategy planning",
    post: "5 Days",
    info: danger,
    background: dangers,
    percent: "-27%",
  },
  {
    id: 4,
    name: "Product goals strategy",
    post: "12 Days",
    info: safe,
    background: safer,
    percent: "+8%",
  },
];
