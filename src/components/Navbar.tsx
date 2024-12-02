import { Logo } from "@/components/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className={
        "sticky top-7 flex w-[51rem] flex-row items-center justify-between rounded-2xl border border-neutral-800 p-4 backdrop-blur-xl"
      }
    >
      <Logo />
      <div className={"flex gap-4"}>
        <Link href={"/rules"}>Rules</Link>
        <Link href={"/hacker/sign-in"}>Sign in</Link>
      </div>
    </nav>
  );
};
