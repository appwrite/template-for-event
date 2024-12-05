"use client";
import { useEffect, useState } from "react";
import { HackerSubmission } from "@/app/hacker/submit/page";
import { getUserSubmissions } from "@/tools/submission";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState<null | {
    total: number;
    documents: Array<HackerSubmission>;
  }>(null);

  const loadSubmissions = async () => {
    setSubmissions(await getUserSubmissions());
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  return (
    <main className={"flex min-h-screen flex-col items-center justify-between"}>
      que
    </main>
  );
}
