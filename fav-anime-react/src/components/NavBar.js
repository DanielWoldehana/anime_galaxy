import React, { useState } from "react";
import CreateFav from "./CreateFav";
import UpdateFav from "./UpdateFav";
import { Link, Redirect } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { blue, red } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";
import home from "../images/house.png";
import star from "../images/star2.png";
import bag from "../images/shopping-bag.png";
import gameIcon from "../images/joystick.png";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    fontSize: "50px"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#FEE140",
    background:
      "radial-gradient(circle, rgba(229,242,75,1) 0%, rgba(0,0,0,1) 85%)",
    boxShadow: "inset 0 0 50px #000000"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer({ onAnimeCreate }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleRedirect() {}
  console.log(onAnimeCreate);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ flex: 1 }}>
            <Link to="/" className="navTitle">
              Anime Galaxy
            </Link>
          </Typography>
          {/* <UpdateFav /> */}
          <CreateFav onCreate={onAnimeCreate} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleRedirect} key="Home">
            <ListItemIcon className="iconContainer">
              <Link to="/">
                <img src={home} alt="icon" className="icon homeIcon" />
              </Link>
            </ListItemIcon>
            <ListItemText button>
              {" "}
              <Link to="/" className="iconLink">
                Home
              </Link>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button key="Fav">
            <ListItemIcon>
              <Link to="/favAnime">
                <img src={star} alt="icon" className="icon favIcon" />
              </Link>
            </ListItemIcon>

            <ListItemText button>
              <Link to="/favAnime" className="iconLink">
                Favorites
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button key="Home">
            <ListItemIcon>
              <Link to="/animeShop">
                <img src={bag} alt="icon" className="icon shopIcon" />
              </Link>
            </ListItemIcon>
            <ListItemText button>
              {" "}
              <Link to="/animeShop" className="iconLink">
                Shop
              </Link>{" "}
            </ListItemText>
          </ListItem>
          <ListItem button key="Home">
            <ListItemIcon>
              <Link to="/animeGames">
                <img src={gameIcon} alt="icon" className="icon gameIcon" />
              </Link>
            </ListItemIcon>
            <ListItemText button>
              {" "}
              <Link to="/animeGames" className="iconLink">
                Games
              </Link>{" "}
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List />
      </Drawer>
    </div>
  );
}
