import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import BasketScreen from "../BasketScreen";
import BeerScreen from "../BeerScreen";
import HomeScreen from "../HomeScreen";
import theme from "../ds/theme";
import CountdownScreen from "../CountdownScreen";
import { BasketContext } from "../contexts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketContext.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/countdown" element={<CountdownScreen />} />
              <Route path="/basket" element={<BasketScreen />} />
              <Route path="/beers/:id" element={<BeerScreen />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </BasketContext.Provider>
    </QueryClientProvider>
  );
}
