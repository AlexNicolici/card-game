import React from "react";
import { useNavigate } from "react-router-dom";
import { CardType, useCardContext } from "../context/CardState";
import CardWrapperType from "../components/Card/CardWrapperType";
import CharacterCard from "../components/CharacterCard/CharacterCard";

function CardClasses() {
  const navigate = useNavigate();
  const { selectedCardType, setSelectedCardType } = useCardContext();

  const handleSelectCardType = (type: CardType) => {
    setSelectedCardType(type);
  };

  return (
    <div className="max-w-3xl min-h-screen mx-auto flex flex-col justify-center items-center ">
      <h1 className="text-gray-100 text-4xl font-bold drop-shadow mb-8">
        CHOOSE YOUR CARD CLASS
      </h1>

      <div className="w-full flex flex-row justify-evenly">
        <button>
          <CardWrapperType
            onClick={() => handleSelectCardType("fire")}
            className="justify-center items-center"
            type="fire"
          >
            <h1 className="text-red-500 text-2xl font-semibold">FIRE CARD</h1>
          </CardWrapperType>
        </button>

        <button>
          <CardWrapperType
            onClick={() => handleSelectCardType("ice")}
            className="justify-center items-center"
            type="ice"
          >
            <h1 className="text-cyan-200 text-2xl font-semibold">ICE CARD</h1>
          </CardWrapperType>
        </button>
      </div>

      <CharacterCard />
    </div>
  );
}

export default CardClasses;
