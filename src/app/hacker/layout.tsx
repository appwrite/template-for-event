import { NavbarLoggedin } from "@/components/NavbarLoggedin";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarLoggedin />
      {children}
    </>
  );
}
