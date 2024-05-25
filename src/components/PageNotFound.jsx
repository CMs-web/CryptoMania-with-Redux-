import { Box, Button, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      height={"90vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h4">404 Page Not Found</Typography>
      <Box>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "20px", marginTop: "20px" }}
          onClick={() => navigate(-1)}
        >
          Go to cart
        </Button>
      </Box>
    </Box>
  );
};

export default PageNotFound;
