import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  margin: 40px 180px;
`;

const PokemonList = () => {
  const { allPokemon } = usePokemon();

  return (
    <ListStyle>
      {allPokemon.map((card) => (
        <PokemonCard key={card.id} data={card} type={"normal"} />
      ))}
    </ListStyle>
  );
};
export default PokemonList;
