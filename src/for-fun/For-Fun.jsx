import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const forFunText =
  "When I'm not coding or working on school assignments, you can normally find me listening to music on Spotify, " +
  "playing Super Smash Bros with my friends, or vegging out on Netflix. I also love to play guitar but am hopelessly out of " +
  " practice 😬. I also spend too much time contemplating Formula 1 and whether Sir Lewis will lock up title #8.";

const musicRecText =
  "Since I have your attention, here's a shameless plug for music I like:";
const musicRecs = [
  { artist: "Mall Grab", song: "Love Reigns ❤️" },
  { artist: "Obskür", song: "Bayside 🌊" },
  { artist: "Bakar, Dominic Fike", song: "Stop Selling Her Drugs 🛑" },
  { artist: "The Neighbourhood", song: "Stuck with Me 🧷" },
  { artist: "Jonathan Richman", song: "Parties In The U.S.A. 🇺🇸" },
];
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

const ForFun = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={10} className={classes.title}>
        <Typography variant="h4">For Fun</Typography>
      </Grid>
      <Grid item xs={10} className={classes.aboutText}>
        <Typography variant="body1">{forFunText}</Typography>
      </Grid>
      <Grid item xs={10} className={classes.aboutText}>
        <Typography variant="body1">{musicRecText}</Typography>
        <ul>
          {musicRecs.map((obj) => (
            <li key={obj.title}>
              {obj.artist} - {obj.song}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
export default ForFun;
