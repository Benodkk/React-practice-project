import { useState } from "react";
import { cards } from "../assets/cards";
import { Card } from "./Card";

export const Wrapper = () => {
  const [query, setQuery] = useState("");
  const [renderCards, setRenderCards] = useState(cards);

  const search = () => {
    setRenderCards(cards.filter((card) => card.name === query));
  };

  const changeQuery = (inputValue: string) => {
    setQuery(inputValue);
    setRenderCards(cards);
  };

  return (
    <div className="flex w-full flex-col">
      <input
        type="text"
        className="border-2 border-black"
        placeholder="Search by name"
        onChange={(e) => changeQuery(e.target.value)}
      />
      <button className="border-2 border-black" onClick={search}>
        Search
      </button>
      <div className="flex  flex-col gap-8 lg:flex-row">
        {renderCards.map((card) => {
          return <Card key={card.id} data={card} />;
        })}
      </div>
    </div>
  );
};
