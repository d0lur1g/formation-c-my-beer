const responseToJson = (response) => response.json();

const apiUri =
  "https://my-json-server.typicode.com/d0lur1g/formation-c-my-beer";

//const apiUri = "//localhost:3001";

export default function cMyBeersFetch(route) {
  return () => fetch(`${apiUri}${route}`).then(responseToJson);
}
