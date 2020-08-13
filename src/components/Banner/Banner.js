import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styles from "./styles";
import { Typography, Container, withStyles } from "@material-ui/core";

const Banner = ({ classes }) => {
  return (
    <>
      <Container className={classes.bannerContainer} maxWidth="false">
        <Typography className={classes.primaryFont} variant="h3">
          Ken | Huang
        </Typography>
        <Typography
          className={[classes.secondaryFont, classes.chevron]}
          variant="h4"
        >
          developer
        </Typography>
        <Typography className={classes.primaryFont} variant="h3">
          Vancouver | BC
        </Typography>
        <ArrowDropDownIcon
          className={classes.arrow}
          color="primary"
          fontSize="large"
        />
      </Container>
    </>
  );
};

export default withStyles(styles)(Banner);
