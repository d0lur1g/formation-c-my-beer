import { number } from "prop-types";

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

const useQuantity = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  return [quantity, handleChange];
};

export default function Beer({ id, maxQuantity = 5 }) {
  const [quantity, setQuantity] = useQuantity();

  const items = new Array(maxQuantity).fill(null);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://brewerydb-images.s3.amazonaws.com/beer/Ez5Orj/upload_4tqdxd-contentAwareLarge.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
  id: number.isRequired,
  maxQuantity: number,
};
