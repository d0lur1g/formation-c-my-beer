import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import Beer from "../Beer";
import Screen from "../Screen";

const responseToJson = (response) => response.json();

export default function HomeScreen() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/d0lur1g/formation-c-my-beer/beers"
    )
      .then(responseToJson)
      .then((beers) => setBeers(beers));
  }, [setBeers]);

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
