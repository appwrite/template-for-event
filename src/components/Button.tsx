"use client";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
  size?: "small" | "medium";
  type?: "primary" | "secondary";
};

export const Button = ({
  children,
  onClick,
  size = "medium",
  type = "primary",
}: ButtonProps) => {
  const getSize = () => {
    switch (size) {
      case "small":
        return "px-2.5 py-1.5 text-sm";
      case "medium":
        return "px-3.5 py-2";
    }
  };

  const getType = () => {
    switch (type) {
      case "primary":
        return "bg-white text-neutral-800";
      case "secondary":
        return "border border-neutral-750 text-neutral-250";
    }
  };

  return (
    <button
      className={`flex w-fit flex-row items-center gap-2 rounded-lg ${getType()} ${getSize()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
