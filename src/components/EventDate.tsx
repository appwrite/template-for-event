export const EventDate = () => {
  return (
    <div
      className={
        "sp flex w-72 flex-row items-center justify-around border-y border-neutral-800 sm:w-96"
      }
    >
      <div className={"flex flex-col justify-center py-2.5"}>
        <span className={"text-sm text-neutral-500"}>Starts on</span>
        <span className={"text-xl text-neutral-50"}>Dec 2, 2024</span>
      </div>
      <div className={"back h-14 w-px bg-neutral-800"} />
      <div className={"flex flex-col justify-center py-2.5"}>
        <span className={"text-sm text-neutral-500"}>Ends on</span>
        <span className={"text-xl text-neutral-50"}>Dec 31, 2024</span>
      </div>
    </div>
  );
};
