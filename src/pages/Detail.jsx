import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const StyledDeatil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { allPokemon } = usePokemon();

  const queryParams = new URLSearchParams(location.search);
  const id = parseInt(queryParams.get("id"));

  const pokemon = allPokemon.find((p) => p.id === id);
  const { korean_name, types, description } = pokemon;

  return (
    <StyledDeatil>
      <h6>NO.{id}</h6>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={korean_name}
        style={{ width: "200px", height: "auto" }}
      />
      <h5>{korean_name}</h5>
      <h5> {types}</h5>
      <h5>{description}</h5>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </button>
    </StyledDeatil>
  );
};

export default Detail;
