import { number, shape, string } from "prop-types";

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

export default function Beer({ beer, maxQuantity = 5 }) {
  const [quantity, setQuantity] = useSelect();

  const items = new Array(maxQuantity).fill(null);

  const { name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
          >
            {items.map((_, index) => {
              const i = index + 1;
              return (
                <MenuItem key={i} value={i}>{`${i} bouteille(s)`}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button size="small">Ajouter</Button>
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
};
