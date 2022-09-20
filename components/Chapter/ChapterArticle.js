import { Box, Typography } from "@mui/material";
import BlogApi from "../API/BlogApi";
const ChapterArticle = ({ catagory_name }) => {
  return (
    <>
      {BlogApi.map((dataa, index) =>
        dataa.subobj[0].subtree
          .filter((data) => data.url === catagory_name)
          .map((data, index) => (
            <Box key={index} sx={{ pt: "15px" }}>
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
              <Typography
                dangerouslySetInnerHTML={{ __html: data.article }}
              ></Typography>
            </Box>
          ))
      )}
    </>
  );
};
export default ChapterArticle;
