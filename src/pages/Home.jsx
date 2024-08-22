import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  const StDiv = styled.div`
    background-color: #ffcb04;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  const StBtn = styled.button`
    background-color: red;
    color: white;
    border-radius: 2px;
    cursor: grab;
  `;
  const navigate = useNavigate();

  return (
    <StDiv>
      <StBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StBtn>
    </StDiv>
  );
};

export default Home;
