"use client";
import { loginWithGithub } from "@/tools/account";
import Image from "next/image";
import Github from "../../public/images/Github.svg";
import { Button } from "@/components/Button";

export const GitHubLoginButton = () => {
  return (
    <Button
      onClick={() => {
        loginWithGithub();
      }}
    >
      <Image src={Github.src} alt={"Github icon"} width={20} height={20} />
      <span>Sign in with GitHub</span>
    </Button>
  );
};
