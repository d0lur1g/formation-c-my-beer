import { QueryClient, QueryClientProvider } from "react-query";
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
      <Basket open />
    </BasketContext.Provider>
  </QueryClientProvider>
);
