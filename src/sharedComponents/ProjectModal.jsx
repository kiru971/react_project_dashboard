import {
  Box,
  Container,
  Divider,
  Modal,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FirstStep from "./stepper/FirstStep";
import SecondStep from "./stepper/SecondStep";
import ThirdStep from "./stepper/ThirdStep";
import FourthStep from "./stepper/FourthStep";

const style = {
  position: "absolute",
  top: "31%",
  left: "31%",
  width: "95%",
  maxHeight: "92%",
  transform: "translate(-30%, -30%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
};

const StepperHead = styled(Stepper)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& .MuiStepConnector-root": {
    display: "none",
  },
}));

const steps = ["Project Type", "Project Settings", "Budget", "Completed"];

const ProjectModal = ({ open, setOpen }) => {
  const [add, setAdd] = useState();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleClose = () => setOpen(false);

  return (
    <Modal
      disableScrollLock
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            padding: "1.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Create Project
          </Typography>
          <IoMdClose
            fill="#99A1B7"
            size={25}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
        </Box>
        <Divider />
        <Box
          sx={{
            margin: "1.25rem",
            padding: "1.75rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              <StepperHead activeStep={activeStep}>
                {steps.map((label, index) => {
                  return (
                    <Step key={label}>
                      <StepLabel
                        sx={{
                          textAlign: "center",
                          "& .MuiSvgIcon-root": {
                            display: "none",
                          },
                          "& .MuiStepLabel-labelContainer": {
                            color: "black",
                            "& .Mui-active": {
                              fontSize: 25,
                              color: "#3e97ff",
                            },
                            "& .Mui-completed": {
                              fontSize: 25,
                              color: "grey",
                            },
                          },
                          "& .MuiStepLabel-label": {
                            fontSize: 23,
                            marginRight: 2,
                          },
                        }}
                      >
                        {label}
                        {activeStep === index ? (
                          <Divider
                            sx={{
                              backgroundColor: "#3e97ff",
                              borderBottomWidth: 3,
                            }}
                          />
                        ) : null}
                      </StepLabel>
                    </Step>
                  );
                })}
              </StepperHead>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "2rem",
                paddingBottom: "2.75rem",
                maxWidth: 500,
              }}
            >
              {activeStep === 0 && <FirstStep handleNext={handleNext} />}
              {activeStep === 1 && (
                <SecondStep
                  handleBack={handleBack}
                  handleNext={handleNext}
                  setAdd={setAdd}
                />
              )}
              {activeStep === 2 && (
                <ThirdStep
                  handleBack={handleBack}
                  handleNext={handleNext}
                  add={add}
                  setAdd={setAdd}
                />
              )}
              {activeStep === 3 && <FourthStep handleReset={handleReset} />}
            </Box>
            {/*  {activeStep === steps.length ? (
               <>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    {activeStep !== 0 && (
                      <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                    )}
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </>
                    )}
               <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-flexContainer": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
                selectionFollowsFocus
              >
                <Tab
                  label="Project Type"
                  {...a11yProps(0)}
                  sx={{
                    textTransform: "none",
                    fontSize: 22,
                    padding: "0px 0px",
                    marginRight: 5,
                  }}
                />
                <Tab
                  label="Project Settings"
                  {...a11yProps(1)}
                  sx={{
                    textTransform: "none",
                    fontSize: 22,
                    padding: "0px 0px",
                    marginRight: 5,
                  }}
                />
                <Tab
                  label="Budget"
                  {...a11yProps(2)}
                  sx={{
                    textTransform: "none",
                    fontSize: 22,
                    padding: "0px 0px",
                    marginRight: 5,
                  }}
                />

                <Tab
                  label="Completed"
                  {...a11yProps(4)}
                  sx={{
                    textTransform: "none",
                    fontSize: 22,
                    padding: "0px 0px",
                    marginRight: 5,
                  }}
                />
                </Tabs>*/}

            {/* <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "3.75rem",
                paddingBottom: "2.75rem",
              }}
            >
               <CustomTabPanel value={value} index={0}>
                <Typography>Project Type</Typography>
                <Typography>
                  If you need more info,please check out FAQ Page
                </Typography>
                <Box sx={{ border: "1px dashed" }}>
                  <Typography>Personal Project</Typography>
                  <span>If you need more info, please check it out</span>
                </Box>
                <Box sx={{ border: "1px dashed" }}>
                  <Typography>Team Project</Typography>
                  <span>Create corporate account to manage users</span>
                </Box>
                <Button onClick={handleClick}>Project Settings</Button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
                <Button onClick={() => setValue(value - 1)}>
                  Project Type
                </Button>
                <Button onClick={() => setValue(value + 1)}>Budget</Button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            </Box>*/}
          </Container>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
