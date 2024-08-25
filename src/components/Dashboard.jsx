import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const StDash = styled.div`
  background-color: #ffcb04;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 180px;
  // border-radius: 10px;
  // hight: auto;
`;

// const StDashBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   height: 100px;
// `;

const StDachBoxIn = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  text-align: center;
`;

const Dashboard = () => {
  const { selectedPokemon } = usePokemon();
  // console.log(selectedPokemon);

  return (
    <StDash>
      <div>
        <h2>나만의 포켓몬</h2>
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
          <p>선택된 포켓몬이 없습니다.</p>
        )}
      </StDachBoxIn>
    </StDash>
  );
};

export default Dashboard;

// selectedPokemon  선택된 포켓몬을 보여주는 컴포넌트, 기본적인 UI작성.
