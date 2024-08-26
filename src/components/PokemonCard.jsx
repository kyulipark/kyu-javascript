import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const PokemonCard = ({ data, type }) => {
  const { addPokemon, removePokemon } = usePokemon();

  const navigate = useNavigate();
  const addHandleAddCick = (event) => {
    event.stopPropagation();
    addPokemon(data);
  };

  const ReHandleAddCick = (event) => {
    event.stopPropagation();
    removePokemon(data);
    alert(`${data.korean_name} 삭제!`);
  };

  return (
    <CardStyle
      onClick={() => {
        navigate(`/detail?id=${data.id}`);
      }}
    >
      <h6>NO.{data.id}</h6>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
        alt={data.korean_name}
      />
      <h5>{data.korean_name}</h5>
      {type === "selected" ? (
        <StBtn remove onClick={ReHandleAddCick}>
          삭제
        </StBtn>
      ) : (
        <StBtn onClick={addHandleAddCick}>추가</StBtn>
      )}
    </CardStyle>
  );
};

export default PokemonCard;

const CardStyle = styled.div`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 150px;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }

  h6 {
    color: #58585a;
    margin: 20px;
  }
  img {
    margin: 0px;
  }
  h5 {
    margin: 0px;
  }
`;

const StBtn = styled.button`
  background-color: red;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  margin: 20px;
`;
