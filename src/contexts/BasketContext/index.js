import { node } from "prop-types";
import React from "react";

import { useBeers } from "../../hooks";

const BasketContext = React.createContext();

const useContext = () => React.useContext(BasketContext);

const sumPrice = (subTotal, { quantity, price }) => subTotal + quantity * price;
const sumQuantity = (subTotal, { quantity }) => subTotal + quantity;

const Provider = ({ children }) => {
  const [basket] = React.useReducer(() => {}, {
    rs8GCw: 4,
    erWFyB: 6,
    Rc4cSx: 3,
  });
  const { isLoading, beers } = useBeers();

  const basketItems = isLoading
    ? []
    : beers
        .filter(({ id }) => Object.keys(basket).includes(id))
        .map((beer) => ({ ...beer, quantity: basket[beer.id] }));

  const totalPrice = String(basketItems.reduce(sumPrice, 0));

  const basketItemsCount = basketItems.reduce(sumQuantity, 0);

  const value = {
    totalPrice,
    basketItems,
    basketItemsCount,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

Provider.proTypes = {
  children: node,
};

const CustomBasketContext = {
  Provider,
  useContext,
};

export default CustomBasketContext;
