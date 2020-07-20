import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "inline-block",
    fontFamiliy: "Georgia",
    fontSize: "30px",
    paddingLeft: "10px",
  },
  navStyle: {
    display: "inline-block",
    float: "right",
  },
  menuStyle: {
    color: "black",
    textDecoration: "none",
  },
}));

function AdminNavigation() {
  const classes = useStyles();

  const menuList = [
    {
      url: "/adminhome",
      name: "HOME",
    },
    {
      url: "/adminstatistics",
      name: "STATISTICS",
    },
    {
      url: "/adminsettings",
      name: "SETTINGS",
    },

  ];

  return (
    <div>
      <Typography className={classes.title}>관리자 페이지</Typography>
      <div className={classes.navStyle}>
        {menuList.map((obj, index) => {
          return (
            <Link className={classes.menuStyle} to={obj.url} key={index}>
              <Button color="inherit">{obj.name}</Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AdminNavigation;
