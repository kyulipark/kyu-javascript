import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  const StDash = styled.div`
    background-color: #ffcb04;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    margin: 40px 180px;
    border-radius: 10px;
  `;

  const StDashBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
  `;
  const StDachBoxIn = styled.div`
    background-color: white;
    height: 100px;
    width: 100px;
    margin: 30px;
    border-radius: 10px;
  `;
  return (
    <StDash>
      <div>
        <h2>나만의 포켓몬</h2>
      </div>
      <StDashBox>
        <StDachBoxIn>1</StDachBoxIn>
        <StDachBoxIn>2</StDachBoxIn>
        <StDachBoxIn>3</StDachBoxIn>
        <StDachBoxIn>4</StDachBoxIn>
        <StDachBoxIn>5</StDachBoxIn>
        <StDachBoxIn>6</StDachBoxIn>
      </StDashBox>
    </StDash>
  );
};

export default Dashboard;

// 선택된 포켓몬을 보여주는 컴포넌트, 기본적인 UI작성.
