import { CircularProgress, Grid } from "@mui/material";
import React from "react";

import { useBeers, useSelect } from "../hooks";
import Beer from "../Beer";
import Filter from "../Filter";
import Screen from "../Screen";

export default function HomeScreen() {
  const [category, setCategory] = useSelect();
  const { isLoading, beers } = useBeers({ categoryId: category });

  if (isLoading)
    return (
      <Screen>
        <Filter category={category} setCategory={setCategory} />
        <br />
        <CircularProgress />
      </Screen>
    );

  return (
    <Screen>
      <Filter category={category} setCategory={setCategory} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container justifyContent="space-between" spacing={4}>
          {beers.map((beer) => (
            <Grid key={beer.id} item>
              <Beer beer={beer} />
            </Grid>
          ))}
        </Grid>
      )}
    </Screen>
  );
}
