import { Logo } from "@/components/Logo";
import { Models } from "appwrite";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { signout } from "@/tools/account";
import Link from "next/link";
import { redirect } from "next/navigation";

type NavbarLoggedInProps = {
  user: Models.User<Models.Preferences>;
  clearUser: () => void;
};

export const NavbarLoggedIn = ({ user, clearUser }: NavbarLoggedInProps) => {
  return (
    <nav
      className={
        "bg flex items-center justify-between border-b border-neutral-800 bg-neutral-850 px-4 py-2"
      }
    >
      <Link href={"/hacker"}>
        <Logo />
      </Link>
      <div className={"flex items-center gap-4"}>
        <Button
          buttonSize={"small"}
          buttonType={"secondary"}
          onClick={() =>
            signout().then(() => {
              clearUser();
              redirect("/");
            })
          }
        >
          Sign out
        </Button>
        <Avatar name={user.name} />
      </div>
    </nav>
  );
};
