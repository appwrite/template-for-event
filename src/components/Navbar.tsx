import { Logo } from "@/components/Logo";
import Link from "next/link";

type NavbarProps = {
  selectedRoute?: string;
};

export const Navbar = ({ selectedRoute }: NavbarProps) => {
  return (
    <nav
      className={
        "bg-neutral-900-80 sticky top-7 z-10 flex w-[20rem] flex-row items-center justify-between rounded-2xl border border-neutral-800 p-4 backdrop-blur-xl sm:w-[30rem] md:w-[51rem]"
      }
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className={"flex gap-4 text-white sm:gap-10"}>
        <span
          className={
            selectedRoute === "rules" ? "font-semibold" : "font-normal"
          }
        >
          <Link href={"/rules"}>Rules</Link>
        </span>
        <span
          className={
            selectedRoute === "sign-in" ? "font-semibold" : "font-normal"
          }
        >
          <Link href={"/sign-in"}>Sign in</Link>
        </span>
      </div>
    </nav>
  );
};
