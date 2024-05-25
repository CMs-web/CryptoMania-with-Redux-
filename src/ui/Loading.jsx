import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        marginTop: "90px",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ marginRight: "20px" }}>
        Loading
      </Typography>
      <CircularProgress />
    </Box>
  );
}

export default Loading
