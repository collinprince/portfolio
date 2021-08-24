import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import HoverCard from "./HoverCard";

const hoverCardInfo = [
  { title: "About Me", path: "/about" },
  { title: "Experience", path: "/experience" },
  { title: "Projects", path: "/projects" },
  { title: "For Fun", path: "/fun" },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    minHeight: "90vh",
    margin: "5vh 0",
  },
  gridItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2vh 0",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "50%",
  },
  card: {
    textAlign: "center",
    height: "50%",
  },
}));

const HoverCardGrid = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {hoverCardInfo.map((obj) => (
        <Grid item key={obj.title} md={5} xs={12} className={classes.gridItem}>
          <Link to={obj.path} className={classes.link}>
            <HoverCard title={obj.title} className={classes.card} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default HoverCardGrid;
