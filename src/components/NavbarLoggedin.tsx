import { Logo } from "@/components/Logo";
import { Models } from "appwrite";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { signout } from "@/tools/account";
import Link from "next/link";

type NavbarLoggedinProps = {
  user: Models.User<Models.Preferences>;
};

export const NavbarLoggedin = ({ user }: NavbarLoggedinProps) => {
  return (
    <nav
      className={
        "bg-neutral-850 bg flex justify-between border-b border-neutral-800 px-4 py-2"
      }
    >
      <Link href={"/hacker"}>
        <Logo />
      </Link>
      <div className={"flex items-center gap-4"}>
        <Button
          buttonSize={"small"}
          buttonType={"secondary"}
          onClick={() => {
            signout();
          }}
        >
          Sign out
        </Button>
        <Avatar name={user.name} />
      </div>
    </nav>
  );
};
