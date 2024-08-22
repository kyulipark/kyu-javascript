import React from "react";
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

// addPokemon, DeletePokemon
//selectedPokemon상태 만들고, 추가 및 제거 기능 구현.
//이미 선택된 포켓몬이라면 alert메시지 띄우고, 최대 6개의 포켓몬만 선택할 수 있도록 alert 메시지로 또 알리기.
//contextAPI로 리펙터링하기
