import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectList: [
    {
      id: 1,
      title: "Fitnes App",
      description: "CRM App application to HR efficiency",
      date: "Nov 10,2021",
      budget: "$284,900.00",
      img: "plurk.svg",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Leaf CRM",
      description: "CRM App application to HR efficiency",
      date: "May 10,2021",
      budget: "$284,900.00",
      img: "disqus.svg",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Atica Banking",
      description: "CRM App application to HR efficiency",
      date: "Mar 14,2021",
      budget: "$605,100.00",
      img: "figma-1.svg",
      status: "In Progress",
    },
  ],
};

const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const id = Date.now();
      let task = { ...action.payload, id };
      state.projectList.push(task);
    },
  },
});

export default ProjectSlice.reducer;
export const { addProject } = ProjectSlice.actions;
