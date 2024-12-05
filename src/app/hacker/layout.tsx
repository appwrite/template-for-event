"use client";
import { NavbarLoggedin } from "@/components/NavbarLoggedin";
import { useEffect, useState } from "react";
import { getUser } from "@/tools/account";
import { redirect } from "next/navigation";
import { Models } from "appwrite";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );

  const loadUser = async () => {
    const user = await getUser();
    if (user) {
      setUser(user);
    } else {
      redirect("/");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return user === null ? (
    <></>
  ) : (
    <>
      <div className={"mb-16"}>
        <NavbarLoggedin user={user} />
      </div>
      {children}
    </>
  );
}
