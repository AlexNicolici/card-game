import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { CardType, useCardContext } from "../../context/CardState";

function CharacterStats({ type }: { type: CardType }) {
  const { totalCharacterHp, totalCharacterPwr } = useCardContext();
  return (
    <div className="flex flex-col mt-7">
      <div
        className={`${
          type === "ice" ? "bg-blue-800" : "bg-red-800"
        } bg-opacity-40 text-white  h-30 w-24 p-2 rounded-lg`}
      >
        <h3 className="text-lg text-center mb-1">STATS</h3>
        <div className="flex flex-col justify-center font-thin  ">
          <p>HP: {totalCharacterHp}</p>
          <p>PWR: {totalCharacterPwr}</p>
        </div>
      </div>
      <h3 className="text-center text-xl text-white flex justify-center items-center">
        5 <AiFillHeart className="text-red-600 text-2xl ml-1 mt-1" />
      </h3>
    </div>
  );
}

export default CharacterStats;
