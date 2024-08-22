import { useEffect, useState } from "react";
import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const ListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(240, 240, 240);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    margin: 40px 180px;
  `;
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const data = MOCK_DATA;
    console.log(1);
    console.log(MOCK_DATA);
    setCards(data);
  }, []);

  return cards.length == 0 ? null : (
    <ListStyle>
      {cards.map((card) => {
        return <PokemonCard key={card.id} data={card} />;
      })}
    </ListStyle>
  );
};
export default PokemonList;

//모든 포켓몬을 리스트로 보여주는 컴포넌트(대시보드 아래부분), 기본적인 UI작성.
