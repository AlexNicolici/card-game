import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {
  GenderCheckedType,
  cardAvatars,
  useCardContext,
} from "../../context/CardState";

function CardInit() {
  const navigate = useNavigate();
  const {
    selectedGender,
    setSelectedGender,
    currentCardName,
    setCurrentCardName,
    characterCardAvatar,
    setCharacterCardAvatar,
  } = useCardContext();

  const changeAvatar = (e: any) => {
    const value: GenderCheckedType = e.target.value;
    setSelectedGender(value);
    setCharacterCardAvatar(cardAvatars[value]);
  };

  const handleCreateCard = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (currentCardName === "") {
      return;
    }
    if (currentCardName.length < 4) {
      return;
    }

    navigate("/choose-card-type");
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-gray-100 text-4xl font-bold drop-shadow mb-2">
        CARD GAME
      </h1>

      <div className="flex flex-col  justify-between bg-black bg-opacity-60 w-56  h-80 p-3 rounded-lg">
        <form className="flex flex-col h-full">
          <input
            placeholder="Enter your name"
            className="rounded-md p-1 mb-2"
            value={currentCardName}
            onChange={(e) => setCurrentCardName(e.target.value)}
            required
          />

          <div className="h-full flex flex-col justify-center items-center">
            <h3 className="text-white font-semibold text-center text-xl">
              Hero gender
            </h3>

            <div className="w-full flex flex-row justify-evenly">
              <div className="w-full flex flex-row justify-center items-center text-white">
                <label htmlFor="male">M</label>
                <input
                  id="male"
                  name="gender"
                  value="male"
                  type="radio"
                  checked={selectedGender === "male"}
                  onChange={changeAvatar}
                />
                <label htmlFor="female" className="ml-10">
                  F
                </label>
                <input
                  id="female"
                  name="gender"
                  value="female"
                  type="radio"
                  checked={selectedGender === "female"}
                  onChange={changeAvatar}
                />
              </div>
            </div>
            <img
              src={characterCardAvatar}
              alt="avatar"
              width={100}
              height={100}
              className="h-full p-1"
            />
          </div>
        </form>

        <Button variant="green" onClick={handleCreateCard}>
          Create your card
        </Button>
      </div>
    </div>
  );
}

export default CardInit;
