import { Box, Typography } from "@mui/material";

const DisplayWinner = () => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#2ba15c",
        borderRadius: 2,
        borderColor: "black",
      }}
    >
      <Typography variant="h5">Winner will be shown here!</Typography>
    </Box>
  );
};

export default DisplayWinner;
