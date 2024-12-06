"use client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick?: () => void;
  buttonSize?: "small" | "medium";
  buttonType?: "primary" | "secondary";
};

export const Button = ({
  children,
  onClick,
  buttonSize = "medium",
  buttonType = "primary",
  ...props
}: ButtonProps) => {
  const getSize = () => {
    switch (buttonSize) {
      case "small":
        return "px-2.5 py-1.5 text-sm";
      case "medium":
        return "px-3.5 py-2";
    }
  };

  const getType = () => {
    switch (buttonType) {
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
      {...props}
    >
      {children}
    </button>
  );
};
