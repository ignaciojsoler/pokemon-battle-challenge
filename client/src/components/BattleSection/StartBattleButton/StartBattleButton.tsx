import { Button } from "@mui/material";
import { Pokemon } from "../../../interfaces/Pokemon.interface";

interface StartBattleButtonProps {
  title?: string;
  userSelectedPokemon: Pokemon | null;
}

const StartBattleButton = ({
  title = "Start battle",
  userSelectedPokemon,
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
    >
      {title}
    </Button>
  );
};

export default StartBattleButton;
