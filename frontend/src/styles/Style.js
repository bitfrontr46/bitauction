import { makeStyles } from "@material-ui/core/styles";

// Theming을 통한 중복 Styles 제거 https://material-ui.com/customization/theming/
// Material UI Style 변수 수정 없이 바로 import 하기 위해, useStyles 그대로 사용함
// 1. 다음과 같이 import한다. import {useStyles} from "../../styles/Style"
// 2. 기존 styles component는 없앤다.

export const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  //왼쪽 바
  header: {
    position: "absolute",
    display: "flex ",
    flexDirection: "column",
    float: "left",
  },
  //윗쪽 제목
  nav: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginLeft: "150px",
  },
  //내용
  section: {
    position: "relative",
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "left",
    marginLeft: "180px",
  },
  //로그인
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
