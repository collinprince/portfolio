import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const contactLinks = [
  {
    type: "site",
    title: "GitHub",
    key: "contact-bar-github",
    link: "https://www.github.com/collinprince",
  },
  {
    type: "site",
    title: "LinkedIn",
    key: "contact-bar-linkedin",
    link: "https://www.linkedin.com/in/collinprince1",
  },
  { type: "email", email: "cprince99@ucla.edu", key: "contact-bar-email" },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    margin: "5vh 0",
  },
  rectangle: {
    border: "3px solid black",
    padding: "1vh 0",
  },
  gridItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0.5vh 0",
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

const ContactBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={5} md={2} className={classes.rectangle}>
        {contactLinks.map((obj) => (
          <Grid item key={obj.key} className={classes.gridItem}>
            {obj.type === "site" ? (
              <a target="new-window" href={obj.link} style={{ color: "black" }}>
                {obj.title}
              </a>
            ) : (
              <a href={`mailto:${obj.email}`} style={{ color: "black" }}>
                {obj.email}
              </a>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ContactBar;
