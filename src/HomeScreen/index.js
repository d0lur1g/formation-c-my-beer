import { CircularProgress, Grid } from "@mui/material";
import React from "react";

import Beer from "../Beer";
import Screen from "../Screen";
import useBeers from "../useBeers";

export default function HomeScreen() {
  const [beers] = useBeers();

  const hasBeers = beers.length > 0;

  return (
    <Screen>
      {hasBeers ? (
        <Grid container justifyContent="space-between" spacing={4}>
          {beers.map((beer) => (
            <Grid key={beer.id} item>
              <Beer beer={beer} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
}
