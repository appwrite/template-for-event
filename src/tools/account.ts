import { Account, type Models, OAuthProvider } from "appwrite";
import { AppwriteClient } from "@/tools/appwrite";
import { redirect } from "next/navigation";

export const account = new Account(AppwriteClient);

export const loginWithGithub = () => {
  account.createOAuth2Session(
    OAuthProvider.Github, // provider
    window.location.origin + "/hacker", // redirect here on success
    window.location.origin, // redirect here on failure
    ["read:user", "user:email"], // scopes (optional)
  );
};

export const getUser = (): Promise<
  Models.User<Models.Preferences> | undefined
> => {
  return account
    .get()
    .then((user) => {
      return user;
    })
    .catch(() => {
      return undefined;
    });
};

export const signout = async () => {
  await account.deleteSessions();
  redirect("/");
};
