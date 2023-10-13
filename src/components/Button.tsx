import React from "react";
import { classNames } from "./classNames";

type ButtonType = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: "green" | "red" | "blue" | "gray";
  className?: string;
};

function Button({
  children,
  onClick,
  variant,
  className,
  ...props
}: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "text-white text-xl px-4 py-2 rounded-xl shadow-md focus:ring-[2px] cursor-pointer duration-150 ease-out",
        className,
        variant === "green"
          ? "bg-green-500 hover:bg-green-400 focus:ring-green-600"
          : "",
        variant === "red"
          ? "bg-red-700 hover:bg-red-600 focus:ring-red-500"
          : "",
        variant === "blue"
          ? "bg-blue-700 hover:bg-blue-600 focus:ring-blue-500"
          : "",
        variant === "gray"
          ? "bg-gray-700 hover:bg-gray-600 focus:ring-gray-500"
          : ""
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
