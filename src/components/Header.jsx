import {React, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Drawer,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core/";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {animateScroll as scroll, scroller} from "react-scroll";
import LaunchIcon from "@material-ui/icons/Launch";
import MenuIcon from "@material-ui/icons/Menu";
import resume from "../pdf/Resume_cs.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
    fontSize: "calc(8px + 1vw)",
    flex: 1,
    "&:hover": {
      color: "gray",
      backgroundColor: "transparent",
    },
  },
  paper: {
    background: "darkgray",
    opacity: 0.8,
  },
}));

function Header() {
  const classes = useStyles();
  const [navBar, setNavBar] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const bp = useMediaQuery(theme.breakpoints.up("sm"));
  const buttonsName = ["About", "Portfolio", "Contact"];

  const handleDrawer = () => {
    setOpen(true);
  };
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(false);
  };
  const SmoothScroll = (event) => {
    const to = event.target.textContent;
    scroller.scrollTo(to, {
      duration: 1500,
      smooth: "easeInOutQuart",
    });
    toggleDrawer(event);
  };
  const menuItems = (
    <>
      {buttonsName.map((name, idx) => {
        return (
          <Button
            key={idx}
            onClick={SmoothScroll}
            size='large'
            classes={{root: classes.button}}
            disableRipple={true}
          >
            {name}
          </Button>
        );
      })}
      <Button
        target='_blank'
        href={resume}
        size='large'
        classes={{root: classes.button}}
        disableRipple
      >
        <LaunchIcon fontSize='small' />
        Resume
      </Button>
    </>
  );
  const changeAppBarBackground = () =>
    window.scrollY >= 65 ? setNavBar(true) : setNavBar(false);
  window.addEventListener("scroll", changeAppBarBackground);
  return (
    <AppBar
      position='fixed'
      style={
        navBar
          ? {backgroundColor: "lightgray"}
          : {backgroundColor: "transparent", boxShadow: "none"}
      }
    >
      <Toolbar>
        <Typography variant={bp ? "h4" : "h5"} className={classes.title}>
          Haley Lai
        </Typography>
        {bp ? (
          menuItems
        ) : (
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          classes={{paper: classes.paper}}
          anchor='top'
          open={open}
          onClose={toggleDrawer}
        >
          {menuItems}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
