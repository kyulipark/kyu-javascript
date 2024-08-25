import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const CardStyle = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 30px;
  cursor: grab;
  transition: transform 0.2s, box-shadow 0.2s;
`;
const StBtn = styled.button`
  background-color: red;
  color: white;
  border-radius: 2px;
  cursor: pointer;
`;

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
    alert("삭제되었습니다.");
  };

  return (
    <CardStyle
      onClick={() => {
        navigate(`/detail?id=${data.id}`);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
        alt={data.korean_name}
      />
      <h5>{data.korean_name}</h5>
      <h6>NO.{data.id}</h6>
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
