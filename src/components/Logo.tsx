export const Logo = () => {
  return (
    <div className={"flex flex-row items-center gap-4"}>
      <div
        className={
          "flex h-6 w-6 items-center justify-center rounded-lg bg-white"
        }
      >
        <div className={"h-3 w-3 rounded-full bg-black"}></div>
      </div>
      <span className={"font-medium text-white"}>Dev Hackathon</span>
    </div>
  );
};
