import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../logo-border.png";

const Navbar = ({ classes }) => {
  return (
    <AppBar className={classes.appbar} position="absolute">
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt="logo"
          height="30rem"
          width="35rem"
          className={classes.logo}
        />
        <MenuIcon className={classes.menuButton} color="primary" />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
