import { Account, OAuthProvider } from "appwrite";
import { AppwriteClient } from "@/tools/appwrite";

const account = new Account(AppwriteClient);

export const loginWithGithub = () => {
  account.createOAuth2Session(
    OAuthProvider.Github, // provider
    window.location.origin + "/hacker", // redirect here on success
    window.location.origin, // redirect here on failure
    ["read:user", "user:email"], // scopes (optional)
  );
};
