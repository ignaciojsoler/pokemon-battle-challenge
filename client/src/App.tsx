import PokemonList from "./components/PokemonList/PokemonList";
import AppProvider from "./context/AppProvider";
import BattleSection from "./components/BattleSection/BattleSection";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Layout from "./Layout/Layout";
import DisplayWinner from "./components/DisplayWinner/DisplayWinner";

function App() {
  return (
    <AppProvider>
      <Layout>
        <SectionTitle />
        <PokemonList />
        <DisplayWinner/>
        <BattleSection />
      </Layout>
    </AppProvider>
  );
}

export default App;
