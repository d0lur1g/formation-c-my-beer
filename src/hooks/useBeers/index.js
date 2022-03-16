import { useQuery } from "react-query";
import queryString from "query-string";

import cMyBeersFetch from "../../cMyBeersFetch";

export default function useBeers({ categoryId = {} }) {
  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: { categoryId },
  });
  const { isLoading, error, data } = useQuery(
    ["beers", categoryId],
    cMyBeersFetch(beersUrl)
  );

  return { isLoading, error, beers: data };
}
