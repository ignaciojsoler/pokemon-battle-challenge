import { Box, Typography } from "@mui/material";
import { convertToPercentage } from "../../../../utils/helpers";

interface PropertyBarProps {
  title: string;
  value: number;
}

const PropertyBar = ({ title, value }: PropertyBarProps) => {
  const valueTransformedIntoPercentage = convertToPercentage({ value });

  return (
    <Box>
      <Typography>{title}</Typography>
      <Box sx={{ width: "100%", backgroundColor: "darkgray", borderRadius: 1, overflow: "hidden" }}>
        <Box
          sx={{
            width: `${valueTransformedIntoPercentage}%`,
            height: 10,
            backgroundColor: "#2ba15c",
          }}
        />
      </Box>
    </Box>
  );
};

export default PropertyBar;
