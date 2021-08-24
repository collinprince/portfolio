import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const experiences = [
  {
    title: "Jump Trading",
    role: "SWE Intern, June - August 2021",
    tech: "C++, JavaScript",
    link: "https://jumptrading.com/",
    key: "experience-jump",
    desc: "Developed infrastructure and backend of internal applications, implemented frontend features to support infrastructure updates.",
  },
  {
    title: "SBB Research Group",
    role: "SWE Intern, June - September 2020",
    tech: "Java, React, TypeScript, MySQL, Spring Boot, Jest",
    link: "https://www.sbbrg.com/",
    key: "experience-sbb",
    desc: "Created fullstack applications to support stock and options trading used by firm's trading team. Improved infrastructure for computing historical gains on past trades, as well as adding unit tests for these improvements.",
  },
  {
    title: "IDEMIA",
    role: "SWE Intern, June - September 2019",
    tech: "Angular, TypeScript, MSSQL, Selenium",
    link: "https://www.idemia.com/",
    key: "experience-idemia",
    desc: "Implemented UI features that are used in the driver enrollment software for 40+ states. Wrote testing framework updates to decrease test-environment related testing failures, ensured 100% test reliability by end of internship.",
  },
  {
    title: "Bruin Entrepreneurs",
    role: "Tech Director / SWE, September 2018 - June 2021",
    tech: "React, JavaScript",
    link: "http://bruinentrepreneurs.org/",
    key: "experience-be",
    desc: "Served as Tech Director of Bruin Entreprenurs, the premier entrepreneurship organization at UCLA. Throughout my time with BE, I served as lead developer on the overhaul of the org's website, as well as developing websites for events such as 1000 Pitches, Designathon, and more.",
  },
  {
    title: "Selected Coursework",
    role: "UCLA, September 2018 - March 2022",
    key: "experience-coursework",
    desc: "Operating Systems, Programming Languages, AI, Networking, Data Structures, Algorithms, Web Applications, Discreate math, Linear Algebra, Statistics",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  titleLink: {
    textDecoration: "none",
    color: "black",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  cardHolder: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  rectangle: {
    border: "3px solid black",
    margin: "2vh 2vw",
    padding: "2vh 2vw",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.title}>
        <Typography variant="h4">Experience</Typography>
      </Grid>
      <Grid className={classes.cardHolder}>
        {experiences.map((obj) => (
          <Grid key={obj.key} item className={classes.rectangle}>
            <a
              href={obj.link}
              target="new-window"
              className={classes.titleLink}
            >
              <Typography variant="h6">
                <b>{obj.title}</b>
              </Typography>
            </a>

            <Typography variant="subtitle2">
              <i>{obj.tech}</i>
            </Typography>
            <Typography variant="caption">{obj.role}</Typography>
            <Typography variant="body1">{obj.desc}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Experience;
