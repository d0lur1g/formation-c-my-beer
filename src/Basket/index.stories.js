import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "../App/theme";
import Basket from ".";
import { BasketContext } from "../contexts";

export default {
  title: "Basket",
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
