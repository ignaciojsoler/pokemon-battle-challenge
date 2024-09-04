import { Box, Typography } from "@mui/material";

const DisplayWinner = () => {
  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "lightskyblue",
        borderRadius: 2,
        borderColor: "black",
      }}
    >
      <Typography variant="h5">Winner is shown here!</Typography>
    </Box>
  );
};

export default DisplayWinner;
