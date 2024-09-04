import { Container, Box, Typography, Card } from "@mui/material"
import PokemonList from "./components/PokemonList/PokemonList"
import AppProvider from "./context/AppProvider"
import BattleSection from "./components/BattleSection/BattleSection"

function App() {

  return (
    <AppProvider>
      <Container sx={{ flexGrow: 1, padding: 2 }}>
      <Box
        display="flex"
        flexDirection="column" // Enables flexbox
        gap={3}
      >
        {" "}
        <Typography variant="h4">Battle of pokemon</Typography>
        <PokemonList/>
        <BattleSection/>
      </Box>
    </Container>
    </AppProvider>
  )
}

export default App
