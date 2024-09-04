import { Button } from "@mui/material";

interface StartBattleButtonProps {
    title?: string;
}

const StartBattleButton = ({title = "Start battle"}: StartBattleButtonProps) => {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        height: "fit-content",
      }}
    >
      {title}
    </Button>
  );
};

export default StartBattleButton;
