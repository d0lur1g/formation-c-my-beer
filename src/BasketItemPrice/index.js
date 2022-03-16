import { string, number } from "prop-types";

import Price from "../Price";

export default function BasketItemPrice({ price, quantity }) {
  return (
    <>
      <strong>
        <Price value={price} />
      </strong>{" "}
      x{quantity}
    </>
  );
}

export const types = {
  price: string,
  quantity: number,
};

BasketItemPrice.propTypes = types;
