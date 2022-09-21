import { Container, Grid, Typography } from "@mui/material";
import BasicCard from "../BasicCard";

const strategydata = [
  {
    smtitle: "Basic",
    title: "Basic",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    url: "/model/catagory/basic",
    img: "/assets/Image/Currency trading.png",
    alt: "Image 1",
  },
  {
    smtitle: "Intermediate",
    title: "Intermediate",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    url: "/model/catagory/intermediate",
    img: "/assets/Image/Money Rain.png",
    alt: "Image 1",
  },
  {
    smtitle: "Professional",
    title: "Professional",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    url: "/model/catagory/professional",
    img: "/assets/Image/Money Rain.png",
    alt: "Image 1",
  },
];

const Content = () => {
  return (
    <>
      <Container sx={{ my: "50px" }}>
        <Typography
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
          Lorem Ipsum is simply dummy
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ textAlign: "left" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it t Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it t
        </Typography>

        <Grid container sx={{ my: "20px" }} spacing={5}>
          {strategydata.map((data, index) => (
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
export default Content;
