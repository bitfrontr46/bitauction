import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import EnrollList from './EnrollList';
import EnrollDialog from './EnrollDialog';
import EnrollAlert from './EnrollAlert';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SEND_REQUEST } from '../../../lib/queries';
import { useMutation } from '@apollo/client';
import Axios from 'axios';
import ConfirmDialog from './ConfirmDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: "center",
        backgroundColor: 'transparent',
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
    return ['카테고리 설정', '마감 시간 설정', '희망 작업 완료일 설정', '태그 입력', '상세 설명 입력', '작성완료'];
}

const EnrollStepper = () => {
    const history = useHistory();
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const [sendRequest, { loading, data }] = useMutation(SEND_REQUEST);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        history.push('/user/mypage');
    };

    const [enrollData, setEnrollData] = useState({
        category: '',
        deadLine: '',
        hopeDate: '',
        detail: '',
        tags: [],
    })

    const { category, deadLine, detail, hopeDate,tags } = enrollData;

    const handleEnrollData = (name, value) => {
        setEnrollData({
            ...enrollData,
            [name]: value
        })
    }

    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const onClickCheck = () => {
        switch (activeStep) {
            case 0:
                if (category === '') {
                    setAlertOpen(true);
                } else {
                    handleNext();
                }
                break;
            case 1:
                if (deadLine === '') {
                    setAlertOpen(true);
                } else {
                    handleNext();
                }
                break;
            case 2:
                if (hopeDate === '') {
                    setAlertOpen(true);
                } else {
                    handleNext();
                }
                break;
            case 3:
                if(tags.length === 0){
                    setConfirmOpen(true);
                } else {
                    handleNext();
                }
                break;
            case 4:
                if(detail === ''){
                    setAlertOpen(true);
                } else {
                    handleNext();
                }
                break;
            case 5:
                setOpen(true);
                break;

        }
    }

    const user_id = useSelector(state => state.userAction.user_id);

    const onClickSendRequest = () => {
        sendRequest({
            variables: {
                input: {
                    author: user_id,
                    ...enrollData,
                }
            }
        })
    }

    useEffect(() => {
        if (data) {
            console.log(data.sendRequest);
            setOpen(false);
            handleNext();
        }
    }, [data])


    return (
        <div className={classes.root}>
            <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
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
                            <p>
                                전문가들의 입찰을 기다려주세요!
                            </p>
                        </span>
                        <Button variant="contained" onClick={handleReset}>돌아가기</Button>
                    </div>
                ) : (
                        <div>
                            <span className={classes.instructions}>
                                <EnrollList stepIndex={activeStep} handleEnrollData={handleEnrollData} />
                            </span>
                            <div style={{ marginTop: '50px' }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                    variant="contained"
                                >
                                    뒤로
                                </Button>
                                {activeStep === steps.length - 1
                                    ?
                                <Button variant="contained" color="primary" onClick={onClickCheck}>
                                    완료
                                </Button>
                                    :
                                <Button variant="contained" color="primary" onClick={onClickCheck}>
                                    다음
                                </Button>}
                            </div>
                        </div>
                    )}
            </div>
            <EnrollDialog open={open} onClickSendRequest={onClickSendRequest} setOpen={setOpen} loading={loading} />
            <EnrollAlert open={alertOpen} setOpen={setAlertOpen} />
            <ConfirmDialog open={confirmOpen} setOpen={setConfirmOpen} handleNext={handleNext} />
        </div>
    );
}

// const EnrollStepper = () => {
//     const history = useHistory();
//     const classes = useStyles();
//     const [activeStep, setActiveStep] = useState(0);
//     const steps = getSteps();

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleReset = () => {
//         history.push('/list');
//     };

//     const [enrollData, setEnrollData] = useState({
//         category: '',
//         deadLine: '',
//         hopeDate: '',
//         detail: '',
//         tags: [],
//     })

//     const { category, deadLine, detail, hopeDate } = enrollData;

//     const handleEnrollData = (name, value) => {
//         setEnrollData({
//             ...enrollData,
//             [name]: value
//         })
//     }

//     const [open, setOpen] = useState(false);
//     const [alertOpen, setAlertOpen] = useState(false);

//     const onClickCheck = () => {
//         if (category === '' || deadLine === '' || detail === '' || hopeDate === undefined) {
//             setAlertOpen(true);
//         } else {
//             setOpen(true);
//         }
//     }

//     const user_id = useSelector(state => state.userAction.user_id);

//     const [loading, setLoading] = useState(false);

//     const sendRequest = () => {
//         setLoading(true);
//         Axios.post('/request',{
//             author : user_id,
//             ...enrollData,
//         })
//         .then(res=>{
//             alert(res.data);
//             setOpen(false);
//             handleNext();
//             setLoading(false);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     }

//     return (
//         <div className={classes.root}>
//             <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//             <div>
//                 {activeStep === steps.length ? (
//                     <div>
//                         <span className={classes.instructions}>
//                             <h1>작성완료</h1>
//                             <p>
//                                 전문가들의 입찰을 기다려주세요!
//                             </p>
//                         </span>
//                         <Button variant="contained" onClick={handleReset}>돌아가기</Button>
//                     </div>
//                 ) : (
//                         <div>
//                             <span className={classes.instructions}>
//                                 <EnrollList stepIndex={activeStep} handleEnrollData={handleEnrollData} />
//                             </span>
//                             <div style={{ marginTop: '50px' }}>
//                                 <Button
//                                     disabled={activeStep === 0}
//                                     onClick={handleBack}
//                                     className={classes.backButton}
//                                     variant="contained"
//                                 >
//                                     뒤로
//                                 </Button>
//                                 {activeStep === steps.length - 1
//                                     ?
//                                     <Button variant="contained" color="primary" onClick={onClickCheck}>
//                                         완료
//                                 </Button>
//                                     :
//                                     <Button variant="contained" color="primary" onClick={handleNext}>
//                                         다음
//                                 </Button>}
//                             </div>
//                         </div>
//                     )}
//             </div>
//             <EnrollDialog open={open} onClickSendRequest={sendRequest} setOpen={setOpen} loading={loading} />
//             <EnrollAlert open={alertOpen} setOpen={setAlertOpen} />
//         </div>
//     );
// }

export default EnrollStepper;
