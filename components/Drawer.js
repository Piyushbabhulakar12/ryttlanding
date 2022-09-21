import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "next/link";
import * as React from "react";
import BtnDefault from "./BtnDefault";
import { listmenu } from "./ListMenu";

export default function Drawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="h6"
        component="div"
        color="primary"
        flexGrow="0"
        sx={{ fontWeight: "600", pl: "15px", mt: "10px" }}
      >
        rytt
      </Typography>
      <List sx={{ mt: "15px" }}>
        {listmenu.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link href={text.link}>
              <ListItemButton>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box sx={{ pl: "15px" }}>
        <BtnDefault title="Login" url="https://rytt.com/home/login/" />
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon fontSize="inherit" color="primary" />
          </IconButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
