import { theme } from "../../../sharedComponents/theme";
import { approve, danger, progress, safe, success } from "../trend/data";

export const data = [
  {
    id: 1,
    name: "Ana Simmons",
    company: "Intertico",
    language: "HTML,JS,ReactJS",
    work: "Web,UI/UX Design",
    img: "./300-14.jpg",
    progress: 50,
    info: success,
  },
  {
    id: 2,
    name: "Jessie Clarcson",
    company: "Agoda",
    language: "C#,ASP.NET,MS SQL",
    work: "Houses & Hotels",
    img: "./300-2.jpg",
    progress: 70,
    info: danger,
  },
  {
    id: 3,
    name: "Lebron Wayde",
    company: "RoadGee",
    language: "PHP,Laravel,VueJS",
    work: "Transportation",
    img: "./300-5.jpg",
    progress: 60,
    info: approve,
  },
  {
    id: 4,
    name: "Ana Simmons",
    company: "Intertico",
    language: "HTML,JS,ReactJS",
    work: "Web,UI/UX Design",
    img: "./300-20.jpg",
    progress: 50,
    info: progress,
  },
  {
    id: 5,
    name: "Ana Simmons",
    company: "Intertico",
    language: "HTML,JS,ReactJS",
    work: "Web,UI/UX Design",
    img: "./300-23.jpg",
    progress: 90,
    info: safe,
  },
];
