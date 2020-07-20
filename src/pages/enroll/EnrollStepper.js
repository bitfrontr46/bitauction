import React, { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import EnrollList from "./EnrollList";
import EnrollDialog from "./EnrollDialog";
import EnrollAlert from "./EnrollAlert";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "카테고리 설정",
    "마감 시간 설정",
    "태그 입력",
    "상세 설명 입력",
    "작성완료",
  ];
}

export default function EnrollStepper() {
  const history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    history.push("/list");
  };

  const [enrollData, setEnrollData] = useState({
    category: "",
    deadLine: "",
    detail: "",
    tags: [],
  });

  const { category, deadLine, detail } = enrollData;

  const handleEnrollData = (name, value) => {
    setEnrollData({
      ...enrollData,
      [name]: value,
    });
  };

  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const onClickCheck = () => {
    if (category === "" || deadLine === "" || detail === "") {
      setAlertOpen(true);
    } else {
      setOpen(true);
    }
  };

  const onClickAxios = () => {
    Axios.post("http://localhost:4000/api/enroll", {
      ...enrollData,
      // id : localStorage.getItem('userID'),
      // token : localStorage.getItem('userToken'),
      userId: "testID",
    })
      .then((res) => {
        setOpen(false);
        handleNext();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.root}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <span className={classes.instructions}>
              <h1>작성완료</h1>
              <p>전문가들의 입찰을 기다려주세요!</p>
            </span>
            <Button variant="contained" color="primary" onClick={handleReset}>
              돌아가기
            </Button>
          </div>
        ) : (
          <div>
            <span className={classes.instructions}>
              <EnrollList
                stepIndex={activeStep}
                handleEnrollData={handleEnrollData}
              />
            </span>
            <div style={{ marginTop: "50px" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickCheck}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <EnrollDialog open={open} onClickAxios={onClickAxios} setOpen={setOpen} />
      <EnrollAlert open={alertOpen} setOpen={setAlertOpen} />
    </div>
  );
}
