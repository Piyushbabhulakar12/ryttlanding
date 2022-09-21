import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import BtnDefault from "./BtnDefault";
import Drawer from "./Drawer";
import { listmenu } from "./ListMenu";
import theme from "./theme";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: "none" }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "none",
                justifyContent: "flex-start",
                alignItems: "center",
                minwidth: "100vh",
                flexGrow: "1",
                "@media only screen and (max-width: 900px)": {
                  display: "flex",
                },
              }}
            >
              <Drawer />
              <Link href="/">
                <Typography
                  variant="h6"
                  component="div"
                  color="primary"
                  flexGrow="0"
                  sx={{ fontWeight: "600", cursor: "pointer" }}
                >
                  rytt
                </Typography>
              </Link>
            </Box>
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                color="primary"
                flexGrow="0"
                sx={{
                  fontWeight: "600",
                  cursor: "pointer",
                  "@media only screen and (max-width: 900px)": {
                    display: "none",
                  },
                }}
              >
                rytt
              </Typography>
            </Link>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minwidth: "100vh",
                flexGrow: "1",
                "@media only screen and (max-width: 900px)": {
                  display: "none",
                },
              }}
            >
              <List>
                <ListItem disablePadding>
                  {listmenu.map((data, index) => (
                    <Link key={index} href={data.link}>
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <ListItemText>{data.title}</ListItemText>
                      </ListItemButton>
                    </Link>
                  ))}

                  <>
                    <ListItemButton
                      onClick={handleMenu}
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <ListItemText>Strategy</ListItemText>
                    </ListItemButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{
                        boxShadow: "none",
                        "& .MuiMenu-paper": {
                          boxShadow:
                            "0px 0px 0px -3px rgb(0 0 0 / 10%), 0px 8px 10px 1px rgb(0 0 0 / 0%), 0px 3px 14px 2px rgb(0 0 0 / 5%);",
                          background: "#fff",
                        },
                      }}
                    >
                      <Link href="/">
                        <MenuItem
                          onClick={handleClose}
                          sx={{ pr: "60px", textAlign: "left", py: "12px" }}
                        >
                          All Time High (ATH)
                        </MenuItem>
                      </Link>
                      <Link href="/">
                        <MenuItem
                          onClick={handleClose}
                          sx={{ pr: "60px", textAlign: "left", py: "12px" }}
                        >
                          Trend Status
                        </MenuItem>
                      </Link>
                    </Menu>
                  </>
                </ListItem>
              </List>
            </Box>

            <BtnDefault title="Login" url="https://rytt.com/home/login/" />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
