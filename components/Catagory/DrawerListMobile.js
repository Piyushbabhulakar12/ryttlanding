import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import CatagoryList from "./CatagoryList";

export default function DrawerListMobile() {
  const [state, setState] = React.useState({
    bottom: false,
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
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
    >
      <List sx={{ display: "flex" }}>
        <ListItem>Filter</ListItem>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, true)}
          aria-label="delete"
          size="large"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </List>
      <CatagoryList />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant="outlined"
            onClick={toggleDrawer(anchor, true)}
            startIcon={<ListIcon />}
            sx={{ textTransform: "capitalize", float: "right" }}
          >
            Catagory
          </Button>

          <SwipeableDrawer anchor={anchor} open={state[anchor]}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
