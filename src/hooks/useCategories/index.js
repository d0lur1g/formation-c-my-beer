import { useQuery } from "react-query";

import cMyBeersFetch from "../../cMyBeersFetch";

export default function useCategories() {
  const { isLoading, error, data } = useQuery(
    "categories",
    cMyBeersFetch("/categories")
  );

  return { isLoading, error, categories: data };
}
