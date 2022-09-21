import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import BlogApi from "../API/BlogApi";

const CatagoryList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [openList, setopenList] = React.useState({});

  const handlerListOpen = (el) => {
    // console.log("el", el.currentTarget.getAttribute("name"));
    const target = el.currentTarget;
    setopenList((prev) => ({
      ...prev,
      [target.getAttribute("name")]: !prev[target.getAttribute("name")],
    }));
  };

  return (
    <List component={"nav"}>
      <ListSubheader component="div" id="nested-list-subheader">
        Catagory
      </ListSubheader>
      {BlogApi.map((page, index) => (
        <List key={index}>
          <ListItem name={page.url} button onClick={handlerListOpen}>
            <ListItemText primary={page.title} />
            {openList[page.url] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {page.subobj.map((data, index) => (
            <Collapse
              in={openList[page.url]}
              key={index}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" key={index} disablePadding>
                {/* Start */}
                {page.subobj.map((dataa, index) => (
                  <List key={index} sx={{ marginLeft: "15px" }}>
                    <ListItemButton
                      name={dataa.title}
                      button
                      onClick={handlerListOpen}
                    >
                      <ListItemText primary={dataa.title} />
                      {openList[dataa.title] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    {dataa.subtree.map((dataasa, index) => (
                      <Collapse
                        in={openList[dataa.title]}
                        key={index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <Link href={"/model/chapter/" + dataasa.url}>
                            <ListItemButton
                              sx={{
                                pl: 4,
                                "&.Mui-selected": {
                                  background: "#0000",
                                  color: "#3076FE",
                                },
                                "&.Mui-selected:hover": {
                                  background: "#0000",
                                  color: "#3076FE",
                                },
                              }}
                              selected={selectedIndex === dataasa.url}
                              onClick={(event) =>
                                handleListItemClick(event, dataasa.url)
                              }
                            >
                              <ListItemText primary={dataasa.title} />
                            </ListItemButton>
                          </Link>
                        </List>
                      </Collapse>
                    ))}
                  </List>
                ))}
                {/* end */}
              </List>
            </Collapse>
          ))}
        </List>
      ))}
    </List>
  );
};
export default CatagoryList;
