import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

const Dex = () => {
  return (
    <div>
      <Dashboard />
      <PokemonList />
    </div>
  );
};

export default Dex;

//이미 선택된 포켓몬이라면 alert메시지 띄우고, 최대 6개의 포켓몬만 선택할 수 있도록 alert 메시지로 또 알리기.
