import { CircularProgress, Grid } from "@mui/material";
import React from "react";

import { useBeers } from "../hooks";
import Beer from "../Beer";
import Filter from "../Filter";
import Screen from "../Screen";

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
      <Filter />
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
