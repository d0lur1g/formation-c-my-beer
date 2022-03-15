import { CircularProgress, Grid } from "@mui/material";
import React from "react";

import Beer from "../Beer";
import Screen from "../Screen";
import { useBeers } from "../hooks";

export default function HomeScreen() {
  const { isLoading, beers } = useBeers();

  if (isLoading)
    return (
      <Screen>
        <CircularProgress />
      </Screen>
    );

  return (
    <Screen>
      <Grid container justifyContent="space-between" spacing={4}>
        {beers.map((beer) => (
          <Grid key={beer.id} item>
            <Beer beer={beer} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
