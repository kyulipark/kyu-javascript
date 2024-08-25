import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = ({ korean_name, types, description }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = parseInt(queryParams.get("id"));

  const StyledDeatil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  return (
    <StyledDeatil>
      <h6>NO.{id}</h6>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={korean_name}
        style={{ width: "200px", height: "auto" }}
      />
      <h5>korean_name: {korean_name}</h5>
      <h5>types: {types}</h5>
      <h5>description: {description}</h5>
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
