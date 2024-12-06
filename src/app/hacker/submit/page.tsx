"use client";
import { InputText, InputTextarea } from "@/components/form";
import { Button } from "@/components/Button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { createNewSubmission } from "@/tools/submission";
import { SubmissionForm } from "@/components/form/SubmissionForm";

export type HackerSubmission = {
  title: string;
  description: string;
  inspiration: string;
  stack: string;
  repositoryLink: string;
  demoLink: string;
  $id: string;
};

export default function Submit() {
  const onSubmit: SubmitHandler<HackerSubmission> = (data) => {
    createNewSubmission(data);
  };

  return (
    <main className={"flex flex-col items-center"}>
      <div className={"w-full px-5 md:w-[600px] md:px-0"}>
        <h1 className={"mb-8 text-3xl text-neutral-50"}>Submit project</h1>
        <SubmissionForm onSubmit={onSubmit} />
      </div>
    </main>
  );
}
