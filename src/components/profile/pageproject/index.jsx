import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProjectModal from "../../../sharedComponents/ProjectModal";
import { BoxHead } from "../../dashboard/css/dashboard";
import {
  BoxLayout,
  ProgressButton,
  ProjectBox,
  ProjectButton,
  ProjectCard,
  ProjectInfo,
  ProjectPost,
  ProjectProfile,
  ProjectSub,
} from "./css/project";
import { TrendTitle } from "../../dashboard/footer/css/footer";

const PageProject = () => {
  const value = useSelector((state) => state.profile.projectList);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <BoxHead>
        <TrendTitle>
          My Projects <ProjectPost>Active</ProjectPost>
        </TrendTitle>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={handleOpen}
        >
          New Project
        </Button>
      </BoxHead>
      <Box sx={{ marginTop: "1.5rem" }}>
        <Grid container spacing={2}>
          {value.map((data) => {
            return (
              <Grid item lg={4} md={6} xs={12} key={data.id}>
                <ProjectCard>
                  <ProjectBox>
                    <ProjectProfile>
                      <img
                        src={`../../${data.img}`}
                        alt="gimage"
                        className="projects"
                      />
                    </ProjectProfile>

                    <ProgressButton>In Progress</ProgressButton>
                  </ProjectBox>
                  <Box sx={{ padding: "1.5rem 1.5rem 2.2rem 1.5rem" }}>
                    <Typography
                      sx={{ fontWeight: "bold", marginBottom: "2px" }}
                      variant="h6"
                    >
                      {data.title}
                    </Typography>
                    <ProjectSub>{data.description}</ProjectSub>
                    <BoxLayout>
                      <ProjectButton>
                        {data.date}
                        <ProjectInfo>Due Date</ProjectInfo>
                      </ProjectButton>
                      <ProjectButton>
                        {data.budget}
                        <ProjectInfo>Budget</ProjectInfo>
                      </ProjectButton>
                    </BoxLayout>
                  </Box>
                </ProjectCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {open && <ProjectModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default PageProject;
