import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ComingSoonForm from "./ComingSoonForm";

const Learning = () => {
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
            }}
          >
            Lorem Ipsum is simply dummy
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: "center", px: "180px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it t
          </Typography>
        </Box>

        <Grid container sx={{ my: "40px" }}>
          <Grid item xs={6}>
            <Image
              src="/assets/Image/Online learning.png"
              height="50px"
              objectFit="contain"
              layout="responsive"
              width="100%"
              alt="Hero Section"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: "600",
                fontSize: "55px",
                textAlign: "left",
                marginRight: "120px",
                lineHeight: "1.4",
              }}
            >
              This Feature Will Come Soon
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "left", marginRight: "120px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it t
            </Typography>
            <ComingSoonForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Learning;
