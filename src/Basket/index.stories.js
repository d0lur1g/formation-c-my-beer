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

const Template = (args) => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Basket open {...args} />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
