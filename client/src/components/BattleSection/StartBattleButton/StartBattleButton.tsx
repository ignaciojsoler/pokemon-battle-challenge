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
      color="success"
      sx={{
        height: "fit-content",
      }}
      disabled={!userSelectedPokemon}
    >
      {title}
    </Button>
  );
};

export default StartBattleButton;
