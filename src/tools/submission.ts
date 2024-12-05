import { Databases, ID, Query } from "appwrite";
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

export const getUserSubmissions = async (): Promise<{
  total: number;
  documents: Array<HackerSubmission>;
}> => {
  const user = await getUser();
  if (user) {
    const databases = new Databases(AppwriteClient);
    const documents = await databases.listDocuments(
      "hackathon",
      "submissions",
      [Query.equal("user-id", user.$id)],
    );

    return documents as unknown as {
      total: number;
      documents: Array<HackerSubmission>;
    };
  }
  return { total: 0, documents: [] };
};
