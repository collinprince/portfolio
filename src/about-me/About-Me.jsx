import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
  },
  aboutText: {
    marginTop: "2vh",
  },
}));

const aboutMeText =
  "My name is Collin Prince and I'm a fullstack + systems engineer and a rising senior at UCLA majoring in Computer Science with a graduation date of March 2022." +
  "Throughout my time at UCLA, I've been able to take a wide range of courses to bolster my computer science and software engineering knowledge, including areas such as " +
  "low-level courses in Operating Systems and Systems Architecture in C, classes focused on the building blocks of logical AI, and courses focused on programming languages and CS theory. " +
  "In my freetime I love to build fullstack applications and learn more about C++, and through my industry experience I've had the opportunity to work with complex systems that deal with huge data sets " +
  "and extremely performance sensitive applications. I'm constantly trying to improve my skills, whether that's reading books on C++ and algorithms, or reading the latest popular Medium post on React development patterns. " +
  "If you're interested in talking with me or hearing more about what I'm working on, feel free to reach out via my email or LinkedIn.";

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.title}>
        <Typography variant="h4">About Me</Typography>
      </Grid>
      <Grid item xs={10} className={classes.aboutText}>
        <Typography variant="body1">{aboutMeText}</Typography>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
