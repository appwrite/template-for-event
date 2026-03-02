import { PropsWithChildren } from "react";

export const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        "absolute rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5"
      }
    >
      {children}
    </div>
  );
};
