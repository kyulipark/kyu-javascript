import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext();

// export function usePokemon() {
//   return useContext(PokemonContext);
// }

// export function PokemonProvider({ children }) {
//   const [selectedPokemon, setSelectedPokemon] = useState([]);

//   const addPokemon = (pokemon) => {
//     //add로직
//   };

//   const removePokemon = (pokemon) => {
//     //remove로직
//     const filterPokemon = selectedPokemon.filter((p) => {
//       return p.id === pokemon.id ? false : true;
//     });
//     selectedPokemon(filterPokemon);
//   };

//   return (
//     <PokemonContext.Provider
//       value={{ selectedPokemon, addPokemon, removePokemon }}
//     >
//       {children}
//     </PokemonContext.Provider>
//   );
// }
