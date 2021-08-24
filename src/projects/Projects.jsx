import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const projects = [
  {
    title: "Reliable Transport Layer Networking",
    date: "May 2021",
    desc: "Implemented Selective Repeat Protocol with packet-loss tolerance in C.",
  },
  {
    title: "Context-Free Grammar Parser",
    date: "February 2021",
    desc: "Built a Context-Free Grammar parser in OCaml which, when given a grammar and an input, could resolve whether the input is in the grammar and what rules from the grammar applied in order to construct the input.",
  },
  {
    title: "Blog Website",
    date: "May 2021",
    desc: "Built a Blog website with Node/Express and Angular that supported submitting blog posts in markdown and then allowed editing and previewing as HTML. Also supported authentication protocol to protect posts via login.",
  },
  {
    title: "Affinity For News",
    date: "September - December 2020",
    desc: "Worked on implementing a Chrome extension for analyzing bias in news and displaying this analysis to users. Wrote React application for Chrome extension and developed Django backend to parse article and query for analysis of content. Project ultimately shelved due to concerns that ML analysis inaccuracies may cause further disinformation.",
  },
  {
    title: "Grapevine",
    date: "June - August 2020",
    desc: "Developed an administrative dashboard for startup social media application Grapevine which allowed system admin to review flagged posts and delete or dismiss these posts. Built frontend of dashboard with React and implemented backend REST API for fetching/deleting these flagged posts using Node.",
  },
  {
    title: "QuaranComfort",
    date: "April 2020",
    desc: "Created survey website to investigate sentiment of US population, specifically Gen Z, during the early days of the pandemic. Wrote front end using HTML/CSS and analyzed submitted information using PHP and displayed results of survey to user with PHP Charts API.",
  },
  {
    title: "Stock Sampler",
    date: "December 2019",
    desc: "Developed a program with Python, Pandas, and SciPy to demonstrate a method to sort stocks into decile buckets based on 5 different time-valued features.",
  },
  {
    title: "Telnet-like Client/Server",
    date: "January - February 2020",
    desc: "Wrote an interface in C for a Telnet-like client/server pair where a server is started in one terminal and the client can connect via a pipe and send commands to the server to be sent back to the client CLI.",
  },
  {
    title: "Zombie Dash",
    date: "February 2019",
    desc: "Developed OOP-based video game using inheritance, polymorphism, and data structures in C++.",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
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

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid>
        <Typography variant="h4">Projects</Typography>
      </Grid>
      <Grid container className={classes.cardHolder}>
        {projects.map((obj) => (
          <Grid item key={obj.title} className={classes.rectangle}>
            <Typography variant="h6">
              <b>{obj.title}</b>
            </Typography>
            <Typography variant="caption">{obj.date}</Typography>
            <Typography variant="body1">{obj.desc}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Projects;
