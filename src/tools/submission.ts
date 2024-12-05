import { Databases, ID } from "appwrite";
import { HackerSubmission } from "@/app/hacker/submit/page";
import { AppwriteClient } from "@/tools/appwrite";
import { redirect } from "next/navigation";
import { getUser } from "@/tools/account";

export const createNewSubmission = async (submission: HackerSubmission) => {
  const user = await getUser();
  if (user) {
    const databases = new Databases(AppwriteClient);

    await databases.createDocument("hackathon", "submissions", ID.unique(), {
      ...submission,
      "user-id": user.$id,
    });
    redirect("/hacker");
  } else {
    redirect("/");
  }
};
