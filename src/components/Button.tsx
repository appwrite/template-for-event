import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button
      className={
        "flex w-fit flex-row items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-neutral-800"
      }
    >
      {children}
    </button>
  );
};
