import { useQuery } from "react-query";
import queryString from "query-string";

import cMyBeersFetch from "../../cMyBeersFetch";

export default function useBeers({ categoryId } = {}) {
  const cleanCategoryId =
    categoryId === "" || categoryId === "0" ? undefined : categoryId;

  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: { categoryId: cleanCategoryId },
  });

  const { isLoading, error, data } = useQuery(
    ["beers", cleanCategoryId],
    cMyBeersFetch(beersUrl)
  );

  return { isLoading, error, beers: data };
}
