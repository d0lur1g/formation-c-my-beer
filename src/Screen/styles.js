import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(4),
}));
