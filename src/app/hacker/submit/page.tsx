"use client";
import { InputText, InputTextarea } from "@/components/form";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Submit() {
  return (
    <main className={"flex flex-col items-center"}>
      <div className={"w-full px-5 md:w-[600px] md:px-0"}>
        <h1 className={"mb-8 text-3xl text-neutral-50"}>Submit project</h1>
        <form>
          <div
            className={
              "bg-neutral-850 flex flex-col gap-4 rounded-lg border border-neutral-800 p-5"
            }
          >
            <InputText label={"Project title"} placeholder={"Placeholder"} />
            <InputTextarea
              label={"Project description"}
              placeholder={"Placeholder"}
            />
            <InputTextarea
              label={"Inspiration behind the project"}
              placeholder={"Placeholder"}
            />
            <InputTextarea label={"Tech stack"} placeholder={"Placeholder"} />
            <InputText label={"Repository link"} placeholder={"Placeholder"} />
            <InputText label={"Demo link"} placeholder={"Placeholder"} />
          </div>
          <div>
            <Link href={"/hacker"}>
              <Button type={"secondary"}>Cancel</Button>
            </Link>
            <Button type={"primary"} onClick={() => {}}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
