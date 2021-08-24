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
    marginRight: "0",
  },
  link: {
    color: "black",
    textDecoration: "none",
    margin: "0",
  },
}));

const BackButton = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid item xs={3} sm={1} className={classes.rectangle}>
        <Link to="/" className={classes.link}>
          <div>Back</div>
        </Link>
      </Grid>
    </Grid>
  );
};

export default BackButton;
