import { Button } from "@mui/material";

const BtnFill = ({ title }) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "capitalize", px: "35px" }}
      >
        {title}
      </Button>
    </>
  );
};
export default BtnFill;
