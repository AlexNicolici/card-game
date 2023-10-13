import React, { useState, useContext } from "react";
import CardContext from "./CardContext";

import sword1 from "../assets/inventory/weapons/sword3.png";
import sword2 from "../assets/inventory/weapons/sword2.png";
import maleAvatar from "../assets/avatars/male3.png";
import femaleAvatar from "../assets/avatars/female3.png";

import armor1 from "../assets/inventory/armor/armor.png";

export type GenderCheckedType = "female" | "male";
export type CardType = "fire" | "ice";

export interface WeaponsInterface {
  name: string;
  icon: string;
  pwr: number;
}

export interface ArmorsInterface {
  name: string;
  icon: string;
  hp: number;
}

export const cardAvatars = {
  male: maleAvatar,
  female: femaleAvatar,
};

export const weapons = [
  {
    name: "Costel",
    icon: sword1,
    pwr: 1,
  },
  {
    name: "Sef",
    icon: sword2,
    pwr: 3,
  },
];

export const armors = [
  {
    name: "Armor1",
    icon: armor1,
    hp: 30,
  },
  {
    name: "Armor1",
    icon: armor1,
    hp: 50,
  },
];

function CardState({ children }: { children: React.ReactNode }) {
  const [currentCardName, setCurrentCardName] = useState("");
  const [selectedGender, setSelectedGender] =
    useState<GenderCheckedType>("male");

  const [selectedCardType, setSelectedCardType] = useState<CardType>("fire");

  const [characterHp, setCharacterHp] = useState(100);
  const [characterPower, setCharacterPower] = useState(1);

  const [characterCardAvatar, setCharacterCardAvatar] = useState(
    cardAvatars.male
  );

  const [characterWeapon, setCharacterWeapon] = useState(weapons[1]);
  const [characterArmors, setCharacterArmors] = useState(armors[0]);

  const totalCharacterHp = characterHp + characterArmors.hp;
  const totalCharacterPwr = characterPower + characterWeapon.pwr;

  return (
    <CardContext.Provider
      value={{
        currentCardName,
        setCurrentCardName,
        selectedGender,
        setSelectedGender,
        selectedCardType,
        setSelectedCardType,
        totalCharacterHp,
        setCharacterHp,
        totalCharacterPwr,
        setCharacterPower,
        characterCardAvatar,
        setCharacterCardAvatar,
        characterWeapon,
        setCharacterWeapon,
        characterArmors,
        setCharacterArmors,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCardContext() {
  return useContext<{
    selectedGender: GenderCheckedType;
    setSelectedGender: (value: GenderCheckedType) => void;
    currentCardName: string;
    setCurrentCardName: (value: string) => void;
    selectedCardType: CardType;
    setSelectedCardType: (value: CardType) => void;
    totalCharacterHp: number;
    setCharacterHp: (value: number) => void;
    totalCharacterPwr: number;
    setCharacterPower: (value: number) => void;
    characterCardAvatar: string;
    setCharacterCardAvatar: (value: string) => void;
    characterWeapon: WeaponsInterface;
    setCharacterWeapon: (value: WeaponsInterface) => void;
    characterArmors: ArmorsInterface;
    setCharacterArmors: (value: ArmorsInterface) => void;
  }>(CardContext);
}

export default CardState;
