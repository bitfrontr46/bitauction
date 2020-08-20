import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    //마우스 포커스 시 동작
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
    },
  },
  //활성화된 링크
  linkActive: {
    backgroundColor: theme.palette.background.light,
  },
  //닫힌 링크
  linkNested: {
    paddingLeft: 0,
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF",
    },
  },
  linkIcon: {
    //material ui의 상대적인 수치로 margin 조절함
    marginRight: theme.spacing(1),
    //secondary보다 쬐끔 어둡게
    color: theme.palette.text.secondary + "99",
    // 스타일 변화시켜주는 스위치
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    //가운데 정렬
    justifyContent: "center",
  },
  linkIconActive: {
    color: theme.palette.primary.main,
  },
  //텍스트 디자인 설정
  linkText: {
    padding: 0,
    color: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
  },
  linkTextActive: {
    color: theme.palette.text.primary,
  },
  linkTextHidden: {
    //불투명도
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: "#D8D8D8",
  },
}));
