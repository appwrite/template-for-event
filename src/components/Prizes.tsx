import Image from "next/image";
import { Tag } from "@/components/Tag";

export const Prizes = () => {
  return (
    <div
      className={
        "grid max-w-screen-xl grid-cols-1 grid-rows-2 gap-8 md:grid-cols-[2fr_1fr]"
      }
    >
      <div
        className={
          "row-span-2 flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-3"
        }
      >
        <div className={"absolute ml-2 mt-2"}>
          <Tag>1</Tag>
        </div>
        <Image
          src={"/images/prize-first.png"}
          alt={"Apple watch"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className={"flex flex-col gap-2"}>
          <span className={"text-2xl text-neutral-100"}>Apple watch</span>
          <span className={"text-sm text-neutral-300"}>First place</span>
        </div>
      </div>
      <div
        className={
          "flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-3"
        }
      >
        <div className={"absolute ml-2 mt-2"}>
          <Tag>2</Tag>
        </div>
        <Image
          src={"/images/prize-second.png"}
          alt={"Apple watch"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
        />
        <div className={"flex flex-col gap-2"}>
          <span className={"text-2xl text-neutral-100"}>Sweatshirt</span>
          <span className={"text-sm text-neutral-300"}>Second place</span>
        </div>
      </div>
      <div
        className={
          "flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-3"
        }
      >
        <div className={"absolute ml-2 mt-2"}>
          <Tag>3</Tag>
        </div>
        <Image
          src={"/images/prize-third.png"}
          alt={"Apple watch"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }}
        />
        <div className={"flex flex-col gap-2"}>
          <span className={"text-2xl text-neutral-100"}>Cap</span>
          <span className={"text-sm text-neutral-300"}>Third place</span>
        </div>
      </div>
    </div>
  );
};
