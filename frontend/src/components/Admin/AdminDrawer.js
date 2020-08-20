import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //구분선 위 메뉴 목록
  const upperMenuList = [
    {
      url: "/admin/home",
      name: "홈",
    },
    {
      url: "/admin/accountlist",
      name: "회원목록",
    },
    {
      url: "/admin/tagslist",
      name: "Tag 분포",
    },
    {
      url: "/lion",
      name: "사자",
    },
    {
      url: "/monkey",
      name: "원숭이",
    },
  ];

  //구분선 아래 메뉴 목록
  const lowerMenuList = [
    {
      url: "/adminsettings",
      name: "설정",
    },
    {
      url: "/dog",
      name: "강아지",
    },
    {
      url: "/cat",
      name: "고양이",
    },
  ];

  const DrawerList = () => {
    return (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {/* 컴포넌트 묶어서 링크와 디자인 따로 둚 https://stackoverflow.com/questions/47206639/how-to-add-a-link-to-a-list-in-material-ui-1-0/48252439#48252439 */}
          {upperMenuList.map((obj, index) => (
            <ListItem button component={Link} to={obj.url} key={index}>
              <ListItemText primary={obj.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {lowerMenuList.map((obj, index) => (
            <ListItem button component={Link} to={obj.url} key={index}>
              <ListItemText primary={obj.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            //안 겹치게 하는 설정
            wrap="nowrap"
          >
            <DrawerList />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
