import { Button } from "@mui/material";
import { Pokemon } from "../../../interfaces/Pokemon.interface";

interface StartBattleButtonProps {
  title?: string;
  userSelectedPokemon: Pokemon | null;
  onClick: () => void;
}

const StartBattleButton = ({
  title = "Start battle",
  userSelectedPokemon,
  onClick,
}: StartBattleButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: "fit-content",
        backgroundColor: "#2ba15c",
        color: "white",
        textTransform: 'none',
        minWidth: 128,
      }}
      disabled={!userSelectedPokemon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default StartBattleButton;
