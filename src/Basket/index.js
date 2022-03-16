import { bool, func } from "prop-types";
import {
  Avatar,
  Divider,
  Drawer,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Image } from "@mui/icons-material";

import { List, Title, Total } from "./styles";

export default function Basket({ open = false, toggle = Function.prototype }) {
  return (
    <Drawer anchor="right" open={open} onClose={toggle}>
      <Title variant="h4" component="h6">
        Mon panier
      </Title>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>
        <Typography variant="h5" component="h6">
          42.42€
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  open: bool,
  toggle: func,
};
