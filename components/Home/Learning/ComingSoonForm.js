import { Box, TextField } from "@mui/material";
import BtnDefault from "../../BtnDefault";

const ComingSoonForm = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: "15px",
          mt: "15px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter You Email Id"
          variant="outlined"
          size="small"
          sx={{ width: "60%" }}
        />
        <Box>
          <BtnDefault title="Notify Me" url="/model" />
        </Box>
      </Box>
    </>
  );
};
export default ComingSoonForm;
