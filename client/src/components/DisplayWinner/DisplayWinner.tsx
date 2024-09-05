import { Box, Typography } from "@mui/material";
import { usePokemon } from "../../context/PokemonContext";
import { BATTLE_RESULTS_COPIES } from "../../utils/constants";

const DisplayWinner = () => {
  const { battleResult } = usePokemon();

  const concatenatedWinnerTest = `${battleResult?.winner.name} ${BATTLE_RESULTS_COPIES.VICTORY}`;

  const displayText = battleResult ? concatenatedWinnerTest : BATTLE_RESULTS_COPIES.EMPTY_STATE;

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#2ba15c",
        borderRadius: 2,
        borderColor: "black",
      }}
    >
      <Typography variant="h5">{displayText}</Typography>
    </Box>
  );
};

export default DisplayWinner;
