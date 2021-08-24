import React from "react";
import { Grid, Typography } from "@material-ui/core";

const HomeTitle = () => (
  <Grid container style={{ justifyContent: "center" }}>
    <Grid item xs={10} style={{ textAlign: "center", marginTop: "5vh" }}>
      <Typography variant="h2">Hey, I&apos;m Collin Prince</Typography>
    </Grid>
  </Grid>
);

export default HomeTitle;
