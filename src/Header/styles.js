import { styled } from "@mui/material/styles";
import { Link as RrdLink } from "react-router-dom";

export const Link = styled(RrdLink)({
  color: "white",
  marginLeft: "2rem",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});
