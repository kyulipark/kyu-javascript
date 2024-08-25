import { createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock";

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [allPokemon, setAllPokemon] = useState(MOCK_DATA);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    //add로직

    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }

    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
  };

  const removePokemon = (pokemon) => {
    //remove로직
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((p) => p.id !== pokemon.id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, allPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
