import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BtnDefault from "./BtnDefault";

const BasicCard = ({ smtitle, title, des, img, alt, url }) => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          border: "1px solid #3076FE",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "left", fontSize: "11px" }}
            >
              {smtitle}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "600",
                fontSize: "25px",
                textAlign: "left",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "left", fontSize: "12px", mt: "5px" }}
            >
              {des}
            </Typography>
            <Box sx={{ mt: "35px" }}>
              <BtnDefault title="Learn More" url={url} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={img}
                height={290}
                width={290}
                objectFit="contain"
                contain="responsive"
                alt={alt}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default BasicCard;
