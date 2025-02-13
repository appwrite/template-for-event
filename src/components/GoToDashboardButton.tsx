"use client";
import Image from "next/image";
import Dashboard from "../../public/images/Dashboard.svg";
import { Button } from "@/components/Button";
import { redirect } from "next/navigation";

export const GoToDashboardButton = () => {
  return (
    <Button
      onClick={() => {
        redirect("/hacker");
      }}
    >
      <Image
        src={Dashboard.src}
        alt={"Dashboard icon"}
        width={20}
        height={20}
      />
      <span>Go to dashboard</span>
    </Button>
  );
};
