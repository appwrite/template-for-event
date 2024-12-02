export const Logo = () => {
  return (
    <div className={"flex flex-row items-center gap-4"}>
      <div
        className={
          "flex h-10 w-10 items-center justify-center rounded-lg bg-white"
        }
      >
        <div className={"h-4 w-4 rounded-full bg-black"}></div>
      </div>
      <span className={"font-medium text-white"}>Dev Hackathon</span>
    </div>
  );
};
