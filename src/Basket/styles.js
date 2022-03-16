import { Box, List as MuiList, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)({
  margin: "1rem",
});

export const List = styled(MuiList)({
  width: 400,
});

export const Total = styled(Box)(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
