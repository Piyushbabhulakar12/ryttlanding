import { Box, Container, Grid, Typography } from "@mui/material";
import BasicCard from "../BasicCard";

const toolsdata = [
  {
    smtitle: "Lorem Ipsum",
    title: "Price Alerts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    url: "https://rytt.com/home/alerts/",
    img: "/assets/Image/Bitcoin trading.png",
    alt: "Image 1",
  },
  {
    smtitle: "Lorem Ipsum",
    title: "Charts",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    url: "https://rytt.com/home/charts/",
    img: "/assets/Image/Money Rain.png",
    alt: "Image 1",
  },
];

const Tools = () => {
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
            Tools and Analysis
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              textAlign: "center",
              px: "180px",
              "@media only screen and (max-width: 900px)": {
                px: "0px",
              },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it t
          </Typography>
        </Box>

        <Grid container sx={{ my: "20px" }} spacing={5}>
          {toolsdata.map((data, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <BasicCard
                smtitle={data.smtitle}
                title={data.title}
                des={data.des}
                img={data.img}
                alt={data.alt}
                url={data.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Tools;
