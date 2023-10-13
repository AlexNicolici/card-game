import React from "react";

import { BsSnow } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { CardType } from "../../context/CardState";

const CharacterCardIcon = ({ type }: { type: CardType }) => {
  if (type === "ice") {
    return <BsSnow className="text-cyan-200 text-2xl" />;
  }
  return <AiFillFire className="text-red-600 text-2xl" />;
};

export default CharacterCardIcon;
