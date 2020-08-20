import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
//classname가 조건에 따라 변하는 경우, switch 대신 사용.
// https://sgwanlee.github.io/dev/react/2019/07/01/classnames-react-package/
import classnames from "classnames";

//styles
const useStyles = makeStyles((theme) => ({
  dotBase: {
    width: 8,
    height: 8,
    backgroundColor: theme.palette.text.hint,
    borderRadius: "50%",
  },
  dotSmall: {
    width: 5,
    height: 5,
  },
  dotLarge: {
    width: 11,
    height: 11,
  },
}));

//페이지에서 사용할 "점" 속성
export default function Dot({ size, color }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      //switch 대신 className package 사용
      className={classnames(classes.dotBase, {
        [classes.dotLarge]: size === "large",
        [classes.dotSmall]: size === "small",
      })}
      style={{
        backgroundColor:
          color && theme.palette[color] && theme.palette[color].main,
      }}
    ></div>
  );
}
