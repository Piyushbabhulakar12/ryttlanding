import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import BlogApi from "../API/BlogApi";
import CatagoryList from "../Catagory/CatagoryList";
import ChapterArticle from "./ChapterArticle";

const Chapter = ({ catagory_name }) => {
  return (
    <>
      <Container sx={{ my: "50px" }}>
        {BlogApi.map((dataa, index) =>
          dataa.subobj[0].subtree
            .filter((data) => data.url === catagory_name)
            .map((data, index) => (
              <>
                <Grid container sx={{ py: "50px" }} spacing={2}>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        border: "1px solid #e1e1e1",
                        borderRadius: "10px",
                        padding: "5px",
                      }}
                    >
                      <CatagoryList />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ px: "20px" }}>
                      <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/model">
                          Model
                        </Link>
                        <Link
                          underline="hover"
                          color="inherit"
                          href={"/model/catagory/" + dataa.url}
                        >
                          {dataa.title}
                        </Link>
                        <Typography color="text.primary">
                          {data.title}
                        </Typography>
                      </Breadcrumbs>

                      <ChapterArticle catagory_name={catagory_name} />
                    </Box>
                  </Grid>
                </Grid>
              </>
            ))
        )}
      </Container>
    </>
  );
};
export default Chapter;
