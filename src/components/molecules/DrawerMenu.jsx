import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to="/logout">Sair</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
