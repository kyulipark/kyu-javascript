import React from "react";
import Router from "./shared/Router";
import { PokemonContext } from "./context/PokemonContext";
import MOCK_DATA from "./mock";

function App() {
  return (
    <PokemonContext.Provider value={{ MOCK_DATA }}>
      <Router />
    </PokemonContext.Provider>
  );
}

export default App;
