import { Container, Box, Typography, Card } from "@mui/material"
import PokemonList from "./components/PokemonList/PokemonList"
import AppProvider from "./context/AppProvider"

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
      </Box>
    </Container>
    </AppProvider>
  )
}

export default App
