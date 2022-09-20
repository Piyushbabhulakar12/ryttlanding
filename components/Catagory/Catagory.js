import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import BlogApi from "../API/BlogApi";
import CatagoryCard from "./CatagoryCard";
import CatagoryList from "./CatagoryList";

const Catagory = ({ catagory_name }) => {
  return (
    <>
      <Container sx={{ my: "50px" }}>
        {BlogApi.filter((data) => data.url === catagory_name).map(
          (data, index) => (
            <>
              <Typography
                key={index}
                variant="h3"
                component="div"
                color="primary"
                sx={{
                  fontWeight: "600",
                  fontSize: "35px",
                  textAlign: "left",
                  py: "15px",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ textAlign: "left" }}
              >
                {data.subtitle}
              </Typography>
            </>
          )
        )}

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
                <Typography color="text.primary">Catagory</Typography>
              </Breadcrumbs>

              <CatagoryCard catagory_name={catagory_name} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Catagory;
