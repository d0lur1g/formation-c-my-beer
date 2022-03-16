import { string } from "prop-types";

export default function Price({ value }) {
  if (value <= 0) return null;

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

Price.propTypes = {
  value: string,
};
