import { Card, Typography } from "@mui/material";
import Link from "next/link";
import BlogApi from "../API/BlogApi";

const CatagoryCard = ({ catagory_name }) => {
  return (
    <>
      {BlogApi.filter((data) => data.url === catagory_name).map(
        (dataa, index) =>
          dataa.subobj[0].subtree.map((data, index) => (
            <Link key={index} href={"/model/chapter/" + data.url}>
              <Card
                key={index}
                sx={{
                  padding: "15px",
                  boxShadow: "none",
                  mt: "15px",
                  border: "1px solid #e1e1e1",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "600",
                    fontSize: "25px",
                    textAlign: "left",
                  }}
                >
                  {data.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ textAlign: "left", fontSize: "14px", mt: "5px" }}
                >
                  {data.subtitle}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ textAlign: "right", fontSize: "12px", mt: "9px" }}
                >
                  {data.time}
                </Typography>
              </Card>
            </Link>
          ))
      )}
    </>
  );
};
export default CatagoryCard;
