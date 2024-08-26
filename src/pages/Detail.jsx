import styled from "styled-components";
import {
  unstable_useViewTransitionState,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

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
      <Styledbox>
        <h6>NO.{id}</h6>
        <h2>{korean_name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={korean_name}
          style={{ width: "200px", height: "auto" }}
        />
        <StyledboxType>
          <h4> {types}</h4>
          <h5>{description}</h5>
        </StyledboxType>
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          뒤로가기
        </button>
      </Styledbox>
    </StyledDeatil>
  );
};

export default Detail;

const StyledDeatil = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Styledbox = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 360px;
  padding: 20px;
  /* &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  } */

  h2 {
    color: #2d70b7;
  }
  h6 {
    color: #58585a;
    margin: 20px;
  }
  img {
    margin: 0px;
  }

  button {
    background-color: red;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    margin: 20px;
  }
`;

const StyledboxType = styled.div`
  /* background-color: #f8f8f8; */
  /* background-color: rgba(255, 203, 4, 0.); */
  background-color: #ffcb04;
  border-radius: 10px;
  padding: 20px;

  h4 {
    margin: 10px;
    border-radius: 10px;
  }

  h5 {
    margin: 10px;
  }
`;
