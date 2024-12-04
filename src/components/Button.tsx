"use client";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className={
        "flex w-fit flex-row items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-neutral-800"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
