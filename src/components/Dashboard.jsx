import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const Dashboard = () => {
  const { selectedPokemon } = usePokemon();
  // console.log(selectedPokemon);

  return (
    <StDash>
      <div>
        <h1> 나만의 포켓몬</h1>
      </div>
      <StDachBoxIn>
        {selectedPokemon.length > 0 ? (
          selectedPokemon.map((pokemon, index) => (
            <PokemonCard
              key={index}
              data={selectedPokemon[index]}
              type={"selected"}
            />
          ))
        ) : (
          <p style={{ color: "#2d70b7" }}>선택된 포켓몬이 없습니다.</p>
        )}
      </StDachBoxIn>
    </StDash>
  );
};

export default Dashboard;

const StDash = styled.div`
  background-color: #2d70b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 180px;
  border-radius: 10px;

  h1 {
    color: white;
    font-weight: bold;
  }
`;

const StDachBoxIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background-color: #ffcb04;
  padding: 20px;
  border-radius: 10px;
  margin: 40px 180px;
`;
