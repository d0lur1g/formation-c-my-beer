import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "../ds/theme";
import Basket from ".";
import { BasketContext } from "../contexts";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Basket"),
  component: Basket,
};

const queryClient = new QueryClient();

export const Open = () => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Basket open />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);
