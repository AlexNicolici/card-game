import React from "react";

const CharacterCardTitle = ({ type }: { type: "ice" | "fire" }) => {
  if (type === "ice") {
    return (
      <div className="flex flex-row">
        <h3 className="text-cyan-200 text-sm font-semibold">ICE CARD</h3>
      </div>
    );
  }
  return (
    <div className="flex flex-row">
      <h3 className="text-red-500 text-sm font-semibold">FIRE CARD</h3>
    </div>
  );
};

export default CharacterCardTitle;
