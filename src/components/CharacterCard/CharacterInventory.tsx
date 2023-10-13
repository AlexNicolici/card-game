import extendedInv from "../../assets/inventory/backpack.png";
import { CardType, useCardContext } from "../../context/CardState";

function CharacterInventory({ type }: { type: CardType }) {
  const { characterWeapon, characterArmors } = useCardContext();
  return (
    <div
      className={`${
        type === "ice" ? "bg-blue-800" : "bg-red-800"
      } flex flex-col justify-evenly text-whit bg-opacity-40 h-32 rounded-lg p-1 relative`}
    >
      <button>
        <img
          width={28}
          src={extendedInv}
          alt="inventory-icon"
          className="absolute top-1 right-1 duration-150 hover:bg-red-800 hover:bg-opacity-60 rounded-md  focus:ring-red-700"
        />
      </button>

      <h3 className="text-white text-center text-lg h-8">INVENTORY</h3>
      <div className="flex flex-row justify-evenly">
        <img
          src={characterWeapon.icon}
          alt={characterWeapon.name}
          className="bg-black bg-opacity-60 h-20 w-20 p-1 "
        />

        <img
          src={characterArmors.icon}
          alt={characterArmors.name}
          className="bg-black bg-opacity-60 h-20 w-20 p-1"
        />
      </div>
    </div>
  );
}

export default CharacterInventory;
