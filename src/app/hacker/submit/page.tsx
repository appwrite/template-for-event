"use client";
import { InputText, InputTextarea } from "@/components/form";
import { Button } from "@/components/Button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect } from "next/navigation";

type HackerSubmission = {
  title: string;
  description: string;
  inspiration: string;
  stack: string;
  repositoryLink: string;
  demoLink: string;
};

export default function Submit() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HackerSubmission>();

  const onSubmit: SubmitHandler<HackerSubmission> = (data) => console.log(data);
  console.log(errors);
  return (
    <main className={"flex flex-col items-center"}>
      <div className={"w-full px-5 md:w-[600px] md:px-0"}>
        <h1 className={"mb-8 text-3xl text-neutral-50"}>Submit project</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={
              "bg-neutral-850 flex flex-col gap-4 rounded-lg border border-neutral-800 p-5"
            }
          >
            <InputText
              label={"Project title"}
              placeholder={"Placeholder"}
              {...register("title", { required: true })}
            />
            <InputTextarea
              label={"Project description"}
              placeholder={"Placeholder"}
              {...register("description", { required: true })}
            />
            <InputTextarea
              label={"Inspiration behind the project"}
              placeholder={"Placeholder"}
              {...register("inspiration", { required: true })}
            />
            <InputTextarea
              label={"Tech stack"}
              placeholder={"Placeholder"}
              {...register("stack", { required: true })}
            />
            <InputText
              label={"Repository link"}
              placeholder={"Placeholder"}
              {...register("repositoryLink", { required: true })}
            />
            <InputText
              label={"Demo link"}
              placeholder={"Placeholder"}
              {...register("demoLink", { required: true })}
            />
          </div>
          {Object.keys(errors).length > 0 && (
            <span className={"my-4 text-red-800"}>
              Please fill out all fields
            </span>
          )}
          <div className={"my-5 flex flex-row justify-end gap-2"}>
            <Button
              buttonType={"secondary"}
              type="button"
              onClick={() => {
                redirect("/hacker");
              }}
            >
              Cancel
            </Button>
            <Button buttonType={"primary"} type={"submit"}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
