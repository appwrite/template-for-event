import { Account, type Models, OAuthProvider } from "appwrite";
import { AppwriteClient } from "@/tools/appwrite";

export const account = new Account(AppwriteClient);

export const loginWithGithub = () => {
  account.createOAuth2Session(
    OAuthProvider.Github,
    window.location.origin + "/hacker",
    window.location.origin,
    ["read:user", "user:email"],
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
};
