import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const fetures = [
  {
    img: "/assets/Image/fetures.png",
    alt: "Image data",
    title: "Learn from the best",
    des: "Learn from a variety of courses and live classes to get a deep understanding of the market and tools",
  },
  {
    img: "/assets/Image/fetures.png",
    alt: "Image data",
    title: "Powerful Tools",
    des: "Powerful tools at your disposal to ease your trading workflow and unleash your true potential",
  },
  {
    img: "/assets/Image/fetures.png",
    alt: "Image data",
    title: "Proven Strategies",
    des: "Access proven and backtested strategies used by thousands of people to make consistent trades and profits",
  },
];

const Features = () => {
  return (
    <>
      <Container>
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "600",
              fontSize: "35px",
              textAlign: "center",
              py: "15px",
              "@media only screen and (max-width: 900px)": {
                fontSize: "25px",
              },
            }}
          >
            Lorem Ipsum is simply dummy
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              textAlign: "center",
              px: "180px",
              "@media only screen and (max-width: 900px)": {
                fontSize: "14px",
                px: "10px",
              },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>

          <Grid container sx={{ my: "50px" }}>
            {fetures.map((data, index) => (
              <Grid key={index} item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={data.img}
                    width={150}
                    height={150}
                    alt={data.img}
                  />
                </Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "600",
                    fontSize: "22px",
                    textAlign: "center",
                    px: "120px",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ textAlign: "center", px: "50px", fontSize: "14px" }}
                >
                  {data.des}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Features;
