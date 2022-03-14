import { bool, node, string } from "prop-types";
import clsx from "clsx";

import "./styles.css";
import { Title, Subtitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Title>CMyBeer</Title>
      <Subtitle isHome={isHome}>{title}</Subtitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
