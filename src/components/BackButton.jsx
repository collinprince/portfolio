import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    margin: "5vh 0",
    verticalAlign: "center",
    marginLeft: "2vw",
  },
  rectangle: {
    border: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "5vh",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

const BackButton = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Link to="/" className={classes.link}>
        <Grid item xs={3} sm={1} className={classes.rectangle}>
          <div>Back</div>
        </Grid>
      </Link>
    </Grid>
  );
};

export default BackButton;
