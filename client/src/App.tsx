import { Container, Box, Typography, Card } from "@mui/material"
import PokemonList from "./components/PokemonList/PokemonList"

function App() {

  return (
    <>
      <Container sx={{ flexGrow: 1, padding: 2 }}>
      <Box
        display="flex"
        flexDirection="column" // Enables flexbox
        gap={3}
      >
        {" "}
        <Typography variant="h4">Battle of pokemon</Typography>
        <Box>
          <Typography variant="h5">Select your pokemon</Typography>
        </Box>
        <PokemonList/>
      </Box>
    </Container>
    </>
  )
}

export default App
