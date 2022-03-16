import { node } from "prop-types";
import { useToggle } from "react-use";

import Basket from "../Basket";
import Header from "../Header";
import { Box } from "./styles";

export default function Screen({ children }) {
  const [open, toggle] = useToggle(false);

  return (
    <>
      <Header onToggleBasket={toggle} />
      <Basket open={open} toggle={toggle} />
      <Box component="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
