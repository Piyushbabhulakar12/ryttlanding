import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const menulist = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Blog",
    url: "/model",
  },
  {
    title: "Tools",
    url: "/tools",
  },
  {
    title: "Product",
    url: "/product",
  },
  {
    title: "Technology",
    url: "/technology",
  },
  {
    title: "Service",
    url: "/service",
  },
];

const social = [
  {
    icon: <FacebookOutlinedIcon />,
    url: "/",
  },
  {
    icon: <InstagramIcon />,
    url: "/",
  },
  {
    icon: <TwitterIcon />,
    url: "/",
  },
  {
    icon: <YouTubeIcon />,
    url: "/",
  },
];

const Footer = () => {
  return (
    <>
      <Container>
        <Grid container sx={{ my: "40px" }}>
          <Grid item xs={12} sm={12} md={2} sx={{ my: "10px" }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: "600" }}>
              rytt
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={{ my: "10px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", color: "#343434", fontSize: "16px" }}
            >
              Research
            </Typography>
            {menulist.map((data, index) => (
              <Typography key={index} varient="h6" sx={{ mt: "10px" }}>
                <Link
                  href={data.url}
                  sx={{ fontWeight: "500", color: "#747474" }}
                >
                  {data.title}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} sm={4} md={4} sx={{ my: "10px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", color: "#343434", fontSize: "16px" }}
            >
              Contact Us
            </Typography>
            <Typography
              varient="h6"
              sx={{ mt: "10px", display: "flex", gap: "5px" }}
            >
              <MailOutlinedIcon sx={{ fontSize: "19px", mt: "4px" }} />
              <Link
                href="mailto: support@gmail.com"
                sx={{ fontWeight: "500", color: "#747474" }}
              >
                support@gmail.com
              </Link>
            </Typography>
            <Typography
              varient="h6"
              sx={{ mt: "15px", display: "flex", gap: "5px" }}
            >
              <LocalPhoneOutlinedIcon sx={{ fontSize: "19px", mt: "0px" }} />
              <Link
                href="tel: +91 88 288 88001"
                sx={{ fontWeight: "500", color: "#747474" }}
              >
                +91 88 288 88001
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3} sx={{ my: "10px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", color: "#343434", fontSize: "16px" }}
            >
              Social Media
            </Typography>
            {social.data}
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                gap: "15px",
                mt: "10px",
              }}
            >
              <FacebookOutlinedIcon sx={{ color: "#343434" }} />
              <InstagramIcon sx={{ color: "#343434" }} />
              <TwitterIcon sx={{ color: "#343434" }} />
              <YouTubeIcon sx={{ color: "#343434" }} />
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                color: "#343434",
                fontSize: "16px",
                mt: "35px",
              }}
            >
              Legal
            </Typography>
            <Typography varient="h6" sx={{ mt: "10px" }}>
              <Link
                href="/legal/terms"
                sx={{ fontWeight: "500", color: "#747474" }}
              >
                Terms of Service
              </Link>
            </Typography>
            <Typography varient="h6" sx={{ mt: "10px" }}>
              <Link
                href="/legal/privacy-policy"
                underline="hover"
                sx={{ fontWeight: "500", color: "#747474" }}
              >
                Privacy and policy
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ my: "20px" }}>
          <Grid item xs={12} sm={12} md={12} sx={{ my: "10px" }}>
            <Typography varient="body1" sx={{ textAlign: "center" }}>
              Copyright &copy; 2022 Rytt. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Footer;
