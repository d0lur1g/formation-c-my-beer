import { string, bool } from "prop-types";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BasketItemPrice, {
  types as basketItemPriceTypes,
} from "../BasketItemPrice";

export default function BasketItem({
  name,
  imageUri,
  price,
  quantity,
  divider,
}) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={imageUri} alt={name} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={<BasketItemPrice price={price} quantity={quantity} />}
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
}

BasketItem.propTypes = {
  name: string,
  divider: bool,
  ...basketItemPriceTypes,
};
