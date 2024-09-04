import PokemonList from "./components/PokemonList/PokemonList";
import AppProvider from "./context/AppProvider";
import BattleSection from "./components/BattleSection/BattleSection";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Layout from "./Layout/Layout";

function App() {
  return (
    <AppProvider>
      <Layout>
        <SectionTitle />
        <PokemonList />
        <BattleSection />
      </Layout>
    </AppProvider>
  );
}

export default App;
