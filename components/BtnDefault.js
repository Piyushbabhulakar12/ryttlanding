import { Button } from "@mui/material";
import { useRouter } from "next/router";

const BtnDefault = ({ title, url }) => {
  const router = useRouter();

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        sx={{ textTransform: "capitalize", px: "35px" }}
        onClick={() => router.push(url)}
      >
        {title}
      </Button>
    </>
  );
};
export default BtnDefault;
