import React from "react";
import { CardType as CardInterface } from "../../context/CardState";

function CardWrapperType({
  children,
  type,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  type?: CardInterface;
  className?: string;
  onClick?: () => void;
}) {
  if (type === "ice") {
    return (
      <div
        className={`flex flex-col  bg-iceCard-background bg-center bg-cover bg-no-repeat h-96 w-64 border-2 border-blue-400 drop-shadow-sm rounded-2xl p-2  cursor-pointer ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col bg-fireCard-background bg-center bg-cover bg-no-repeat h-96 w-64 border-2 border-red-500 drop-shadow-sm rounded-2xl p-2  cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default CardWrapperType;
