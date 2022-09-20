import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BtnDefault from "../BtnDefault";
import BtnFill from "../BtnFill";

const HeroSection = () => {
  return (
    <>
      <Container sx={{ my: "80px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h1"
              component="div"
              sx={{ fontWeight: "600", fontSize: "55px" }}
            >
              Lorem Ipsum is simply dummy
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ mt: "15px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Box sx={{ mt: "15px", display: "flex", gap: "15px" }}>
              <BtnFill title="Get Started" />
              <BtnDefault title="Learn More" url="/model" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Image
              src="/assets/Image/Hero_sectio.png"
              height="50px"
              objectFit="contain"
              layout="responsive"
              width="100%"
              alt="Hero Section"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default HeroSection;
