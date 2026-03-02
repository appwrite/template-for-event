"use client";
import {
  deleteUserSubmission,
  getUserSubmissions,
  Submissions,
} from "@/tools/submission";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState<null | Submissions>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getSubmissions = async () => {
    setIsLoading(true);
    const data = await getUserSubmissions();
    setSubmissions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  const showSubmissions = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-10">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      );
    }

    if (submissions) {
      if (submissions.total === 0) {
        return (
          <div
            className={
              "flex w-full flex-col items-center rounded-lg border border-neutral-800 bg-neutral-850 py-10"
            }
          >
            <span className={"mb-2 text-sm font-medium text-neutral-50"}>
              No submissions yet
            </span>
            <span className={"mb-6 px-4 text-center text-sm md:px-0"}>
              Create a submission to participate in the hackathon
            </span>
            <Link href={"/hacker/submit"}>
              <Button>Submit project</Button>
            </Link>
          </div>
        );
      }

      return (
        <div
          className={
            "grid w-full border-separate grid-cols-2 rounded border border-neutral-800 lg:grid-cols-4"
          }
        >
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          >
            Name project
          </div>
          <div
            className={
              "hidden border-b border-neutral-800 bg-neutral-900 px-3 py-2.5 lg:table-cell"
            }
          >
            Repository link
          </div>
          <div
            className={
              "hidden border-b border-neutral-800 bg-neutral-900 px-3 py-2.5 lg:table-cell"
            }
          >
            Demo link
          </div>
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          ></div>

          {submissions.documents.map((submission, index) => {
            return (
              <div className={"contents"} key={submission.$id}>
                <div
                  className={`flex items-center bg-neutral-850 px-3 py-2.5 ${index < submissions.total - 1 ? "border-b border-neutral-800" : ""}`}
                >
                  {submission.title}
                </div>
                <div
                  className={`hidden items-center bg-neutral-850 px-3 py-2.5 lg:flex ${index < submissions.total - 1 ? "border-b border-neutral-800" : ""}`}
                >
                  {submission.repositoryLink}
                </div>
                <div
                  className={`hidden items-center bg-neutral-850 px-3 py-2.5 lg:flex ${index < submissions.total - 1 ? "border-b border-neutral-800" : ""}`}
                >
                  {submission.demoLink}
                </div>
                <div
                  className={`flex items-center justify-end gap-4 bg-neutral-850 px-3 py-2.5 ${index < submissions.total - 1 ? "border-b border-neutral-800" : ""}`}
                >
                  <Button
                    buttonSize={"small"}
                    buttonType={"secondary"}
                    onClick={async () => {
                      await deleteUserSubmission(submission.$id);
                      getSubmissions();
                    }}
                  >
                    Delete
                  </Button>
                  <Link href={`/hacker/submission/${submission.$id}`}>
                    <Button
                      buttonSize={"small"}
                      buttonType={"secondary"}
                      onClick={async () => {}}
                    >
                      View
                      <span className={"hidden sm:inline"}> submission</span>
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <main className={"flex min-h-screen flex-col items-center justify-between"}>
      <div className={"w-full px-5 lg:w-[900px] lg:px-0 xl:w-[1143px]"}>
        <div className={"mb-8 flex flex-row items-center justify-between"}>
          <h1 className={"text-3xl text-neutral-50"}>Submissions</h1>
          {submissions && submissions.total > 0 && (
            <Link href={"/hacker/submit"}>
              <Button>Submit project</Button>
            </Link>
          )}
        </div>
        {showSubmissions()}
      </div>
    </main>
  );
}
