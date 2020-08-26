//id: admin pw: admin
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import useStyles from "../../styles/Style";
import { useHistory } from "react-router-dom";

export default function Login() {
  const classes = useStyles();

  const history = useHistory();

  
  const [admin, setAdmin] = useState({
    adminId: "",
    adminPassword: "",
  });

  const onChangeAdmin = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/api/admin/login", {
      ...admin,
    })
      .then((res) => {
        if (res.data.result) {
          history.push("/admin/home");
        } else {
          alert("아이디 또는 비번이 다릅니다.").then(
            history.push("admin/login")
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin-Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="id"
            label="아이디"
            name="adminId"
            autoComplete="id"
            autoFocus
            onChange={onChangeAdmin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="adminPassword"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangeAdmin}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
        </form>
        <br />
      </div>
    </Container>
  );
}
