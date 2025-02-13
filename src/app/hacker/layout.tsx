"use client";
import { NavbarLoggedIn } from "@/components/NavbarLoggedIn";
import { useUser } from "@/components/UserProvider";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, clearUser } = useUser();

  useEffect(() => {
    if (user === null) {
      redirect("/");
    }
  }, [user]);

  if (user === null) {
    return null;
  }

  return (
    <>
      <div className={"mb-16"}>
        <NavbarLoggedIn user={user} clearUser={clearUser} />
      </div>
      {children}
    </>
  );
}