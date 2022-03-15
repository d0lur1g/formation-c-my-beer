import React from "react";

const responseToJson = (response) => response.json();

export default function useBeers(defaultBeers = []) {
  const [beers, setBeers] = React.useState(defaultBeers);

  React.useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/d0lur1g/formation-c-my-beer/beers"
    )
      .then(responseToJson)
      .then((beers) => setBeers(beers));
  }, [setBeers]);

  return [beers];
}
