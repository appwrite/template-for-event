"use client";
import { useEffect, useState } from "react";
import { getSubmission, updateSubmission } from "@/tools/submission";
import { HackerSubmission } from "@/app/hacker/submit/page";
import { SubmissionForm } from "@/components/form/SubmissionForm";
import { SubmitHandler } from "react-hook-form";
import { redirect } from "next/navigation";

export default function Submission({
  params,
}: {
  params: Promise<{ submissionId: string }>;
}) {
  const [submission, setSubmission] = useState<null | HackerSubmission>(null);

  useEffect(() => {
    const loadSubmission = async () => {
      const submissionId = (await params).submissionId;
      setSubmission((await getSubmission(submissionId)) ?? null);
    };
    loadSubmission();
  }, [params]);

  const onSubmit: SubmitHandler<HackerSubmission> = async (data) => {
    await updateSubmission({ ...data, $id: (await params).submissionId });
    redirect("/hacker");
  };

  return (
    <main className={"flex flex-col items-center"}>
      <div className={"w-full px-5 md:w-[600px] md:px-0"}>
        <h1 className={"mb-8 text-3xl text-neutral-50"}>My submission</h1>
        {submission && (
          <SubmissionForm onSubmit={onSubmit} submission={submission} />
        )}
      </div>
    </main>
  );
}
