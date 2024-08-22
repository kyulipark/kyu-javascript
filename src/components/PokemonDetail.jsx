import React from "react";
import { useNavigate } from "react-router-dom";

export const PokemonDetail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PokemonDetail</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};
//queryString으로 포켓몬 ID 전달하고, 이를 통해 포켓몬 상세정보 표시 페이지 구현.

//

export default PokemonDetail;
