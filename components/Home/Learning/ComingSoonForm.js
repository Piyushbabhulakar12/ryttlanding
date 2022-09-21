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
          "@media only screen and (max-width: 900px)": {
            display: "grid",
            justifyContent: "unset",
            alignItems: "baseline",
          },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter You Email Id"
          variant="outlined"
          size="small"
          sx={{
            width: "60%",
            "@media only screen and (max-width: 900px)": { width: "100%" },
          }}
        />
        <Box>
          <BtnDefault title="Notify Me" url="/model" />
        </Box>
      </Box>
    </>
  );
};
export default ComingSoonForm;
