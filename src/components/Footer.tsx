import Link from "next/link";
import { Socials } from "@/components/Socials";

export const Footer = () => {
  return (
    <footer
      className={
        "flex w-full flex-row items-center justify-between border-t border-neutral-800 bg-neutral-850 px-10 py-6 text-sm"
      }
    >
      <div>
        Deployed by{" "}
        <Link href={"https://appwrite.io"} className={"text-white underline"}>
          Appwrite
        </Link>
        . Source code on{" "}
        <Link
          href={"https://github.com/appwrite"}
          className={"text-white underline"}
        >
          GitHub
        </Link>
      </div>
      <div className={"shrink-0"}>
        <Socials />
      </div>
    </footer>
  );
};
