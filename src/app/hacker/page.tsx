import { getUserSubmissions } from "@/tools/submission";
import { Button } from "@/components/Button";
import Link from "next/link";

export default async function Dashboard() {
  const submissions = await getUserSubmissions();

  const showSubmissions = () => {
    console.log(submissions);
    if (submissions.total === 0) {
      return (
        <div
          className={
            "bg-neutral-850 flex w-full flex-col items-center rounded-lg border border-neutral-800 py-10"
          }
        >
          <span className={"mb-2 text-sm text-neutral-50"}>
            No submissions yet
          </span>
          <span>Loading</span>
        </div>
      );
    }
  };

  return (
    <main className={"flex min-h-screen flex-col items-center justify-between"}>
      <div className={"w-full px-5 lg:w-[900px] lg:px-0 xl:w-[1143px]"}>
        <div className={"flex flex-row items-center justify-between"}>
          <h1 className={"text-3xl text-neutral-50"}>Submissions</h1>
          <Link href={"/hacker/submit"}>
            <Button>Submit project</Button>
          </Link>
        </div>
        {showSubmissions()}
      </div>
    </main>
  );
}
