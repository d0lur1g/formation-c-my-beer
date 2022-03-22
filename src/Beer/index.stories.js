import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import Beer from ".";
import { BasketContext } from "../contexts";
import theme from "../ds/theme";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Beer"),
  component: Beer,
};

const queryClient = new QueryClient();

const defaultBeer = {
  id: "123",
  name: "Bière de test",
  description: "Lorem ipsum",
  price: 1.34,
};

export const WithoutData = () => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Beer />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);

export const WithData = () => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Beer beer={defaultBeer} />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);
