import { Typography } from "@mui/material";

interface SectionTitleProps {
    title?: string;
}

const SectionTitle = ({title = "Battle of pokemon"}: SectionTitleProps) => {
  return <Typography variant="h4">{ title }</Typography>;
};

export default SectionTitle;
