import React from "react";
import { CardType } from "../../context/CardState";
import Button from "../Button";

function CharacterCardButton({ type }: { type: CardType }) {
  if (type === "ice") {
    return (
      <Button variant="blue" className="mt-2">
        BATTLE
      </Button>
    );
  }
  return (
    <Button variant="red" className="mt-2">
      BATTLE
    </Button>
  );
}

export default CharacterCardButton;
