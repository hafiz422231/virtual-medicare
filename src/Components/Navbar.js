import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import SubHeader from "./SubHeader";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "818.75%",
  },
  appBar: {
    boxShadow: "none",
    backgroundColor: "white",
  },
  menuButton: {
    // marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    color: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    // flexGrow: 1 ,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  appImg: {
    width: "15vw",
  },
  navCon: {
    // padding: 18,
    // backgroundColor: "white",
    overflowX: "hiddden",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(6),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  navLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.1vw",
    marginRight: 20,
  },
  navImg: {
    flexGrow: 1,

    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      transform: "scale(2)",
      zIndex: "-1",
      marginTop: 10,
      // marginLeft: 100,
    },
  },
  navLinks: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function ResponsiveDrawer() {
  const dummyCategories = [
    "Medicare 101 On Demand",
    "Live With Agent",
    "Doctor Check Plan",
    "Find Local Agent",
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Typography
          style={{
            fontSize: "1.1vw",
            backgroundColor: "#29aae1",
            color: "white",
            textAlign: "center",
            padding: 1,
          }}
        >
          We are not affiliated with Medicare and are non a government site that
          is hosted by Senior Choice Plans a Licensed Health Insurance agency.
        </Typography>
        <Toolbar className={classes.navCon}>
          <span className={classes.navImg}>
            <img
              alt=""
              className={classes.appImg}
              src={require("../assets/VirtualMedicare.png")}
            />
          </span>
          <span className={classes.navLinks}>
            <a className={classes.navLink} href="/#">
              Medicare 101 On Demand
            </a>
            <a className={classes.navLink} href="/#">
              Live With Agent
            </a>
            <a className={classes.navLink} href="/#">
              Doctor Check Plan
            </a>
            <a className={classes.navLink} href="/#">
              Doctor Check Plan
            </a>
          </span>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            // edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <div className={classes.content}>
        <div className={classes.toolbar} />
        <SubHeader />
      </div> */}
    </div>
  );
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default ResponsiveDrawer;
