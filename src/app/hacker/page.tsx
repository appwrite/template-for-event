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
  const getSubmissions = async () => {
    setSubmissions(await getUserSubmissions());
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  const showSubmissions = () => {
    if (submissions) {
      if (submissions.total === 0) {
        return (
          <div
            className={
              "bg-neutral-850 flex w-full flex-col items-center rounded-lg border border-neutral-800 py-10"
            }
          >
            <span className={"mb-2 text-sm font-medium text-neutral-50"}>
              No submissions yet
            </span>
            <span className={"mb-6 text-sm"}>
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
            "grid w-full border-separate grid-cols-4 rounded border border-neutral-800"
          }
        >
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          >
            Name project
          </div>
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          >
            Repository link
          </div>
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          >
            Demo link
          </div>
          <div
            className={"border-b border-neutral-800 bg-neutral-900 px-3 py-2.5"}
          ></div>

          {submissions.documents.map((submission) => {
            return (
              <div className={"contents"} key={submission.$id}>
                <div className={"bg-neutral-850 px-3 py-2.5"}>
                  {submission.title}
                </div>
                <div className={"bg-neutral-850 px-3 py-2.5"}>
                  {submission.repositoryLink}
                </div>
                <div className={"bg-neutral-850 px-3 py-2.5"}>
                  {submission.demoLink}
                </div>
                <div className={"bg-neutral-850 px-3 py-2.5"}>
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
