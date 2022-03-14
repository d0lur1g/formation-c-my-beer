import Header from "../Header";
import { node } from "prop-types";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Screen.propTypes = {
  children: node,
};
