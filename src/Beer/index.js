import { func, number, shape, string } from "prop-types";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useSelect } from "../hooks";

export default function Beer({
  beer,
  maxQuantity = 5,
  onAddToBasket = Function.prototype,
}) {
  const [quantity, setQuantity] = useSelect(1);

  const items = new Array(maxQuantity).fill(null);

  if (!beer) return null;

  const { id, name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }} component="article">
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl variant="standard">
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            labelId="quantity-label"
            value={quantity}
            label="Quantité"
            onChange={setQuantity}
            size="small"
          >
            {items.map((_, index) => {
              const i = index + 1;
              return (
                <MenuItem key={i} value={i}>{`${i} bouteille(s)`}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button size="small" onClick={() => onAddToBasket(id, quantity)}>
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

Beer.propTypes = {
  beer: shape({
    id: string,
    name: string,
    description: string,
    imageUri: string,
    price: string,
  }),
  maxQuantity: number,
  onAddToBasket: func,
};
