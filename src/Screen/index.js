import { bool, node, string } from "prop-types";

import { Typography } from "@mui/material";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Typography variant="h1">CMyBeer</Typography>
      <Typography variant="h2">{title}</Typography>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
