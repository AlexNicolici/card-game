import React from "react";

import Button from "../Button";
import { useCardContext } from "../../context/CardState";
import CardType from "../Card/CardWrapperType";

import CharacterCardTitle from "./CharacterCardTitle";
import CharacterCardIcon from "./CharacterCardIcon";
import CharacterStats from "./CharacterStats";
import CharacterInventory from "./CharacterInventory";
import CharacterCardButton from "./CharacterCardButton";

function CharacterCard() {
  const { currentCardName, selectedCardType, characterCardAvatar } =
    useCardContext();
  const cardName = currentCardName;

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full flex flex-row flex-wrap justify-center ">
        <CardType className="justify-between" type={selectedCardType}>
          <div className="flex flex-row items-start justify-between mb-2">
            <CharacterCardTitle type={selectedCardType} />

            <CharacterCardIcon type={selectedCardType} />
          </div>

          <div className="flex flex-row justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white font-semibold text-lg text-center drop-shadow">
                {cardName}
              </p>
              <img
                src={characterCardAvatar}
                alt="card-avatar"
                width={120}
                height={120}
              />
            </div>

            <CharacterStats type={selectedCardType} />
          </div>

          <CharacterInventory type={selectedCardType} />
        </CardType>
      </div>
      <CharacterCardButton type={selectedCardType} />
    </div>
  );
}

export default CharacterCard;
