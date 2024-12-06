import { Logo } from "@/components/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className={
        "sticky top-7 z-10 flex w-[20rem] flex-row items-center justify-between rounded-2xl border border-neutral-800 p-4 backdrop-blur-xl sm:w-[30rem] md:w-[51rem]"
      }
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className={"flex gap-4"}>
        <Link href={"/rules"}>Rules</Link>
        <Link href={"/hacker/sign-in"}>Sign in</Link>
      </div>
    </nav>
  );
};
