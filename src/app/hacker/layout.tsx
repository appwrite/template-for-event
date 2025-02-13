"use client";
import { NavbarLoggedIn } from "@/components/NavbarLoggedIn";
import { useUser } from "@/components/UserProvider";
import { redirect } from "next/navigation";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, clearUser } = useUser();

  return user === null ? (
    redirect("/")
  ) : (
    <>
      <div className={"mb-16"}>
        <NavbarLoggedIn user={user} clearUser={clearUser} />
      </div>
      {children}
    </>
  );
}
