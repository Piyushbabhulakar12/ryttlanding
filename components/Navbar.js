import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import BtnDefault from "./BtnDefault";
import theme from "./theme";

const listmenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Blogs",
    link: "/model",
  },
  {
    title: "Tools",
    link: "/tools",
  },
  {
    title: "Product",
    link: "/product",
  },
  {
    title: "Technology",
    link: "/technolgy",
  },
  {
    title: "Service",
    link: "/service",
  },
];

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="static"
          color="transparent"
          sx={{ boxShadow: "none" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              color="primary"
              flexGrow="0"
              sx={{ fontWeight: "600" }}
            >
              rytt
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minwidth: "100vh",
                flexGrow: "1",
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
