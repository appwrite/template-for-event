import { InputText } from "@/components/form/InputText";
import { InputTextarea } from "@/components/form/InputTextarea";
import { Button } from "@/components/Button";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { HackerSubmission } from "@/app/hacker/submit/page";

type SubmissionFormProps = {
  onSubmit: SubmitHandler<HackerSubmission>;
  submission?: HackerSubmission;
};

export const SubmissionForm = ({
  onSubmit,
  submission,
}: SubmissionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HackerSubmission>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={
          "flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-850 p-5"
        }
      >
        <InputText
          label={"Project title"}
          placeholder={"Placeholder"}
          {...register("title", {
            required: true,
            value: submission ? submission.title : undefined,
          })}
        />
        <InputTextarea
          label={"Project description"}
          placeholder={"Placeholder"}
          {...register("description", {
            required: true,
            value: submission ? submission.description : undefined,
          })}
        />
        <InputTextarea
          label={"Inspiration behind the project"}
          placeholder={"Placeholder"}
          {...register("inspiration", {
            required: true,
            value: submission ? submission.inspiration : undefined,
          })}
        />
        <InputTextarea
          label={"Tech stack"}
          placeholder={"Placeholder"}
          {...register("stack", {
            required: true,
            value: submission ? submission.stack : undefined,
          })}
        />
        <InputText
          label={"Repository link"}
          placeholder={"Placeholder"}
          {...register("repositoryLink", {
            required: true,
            value: submission ? submission.repositoryLink : undefined,
          })}
        />
        <InputText
          label={"Demo link"}
          placeholder={"Placeholder"}
          {...register("demoLink", {
            required: true,
            value: submission ? submission.demoLink : undefined,
          })}
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <span className={"my-4 text-red-800"}>Please fill out all fields</span>
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
          {submission ? "Save changes" : "Submit"}
        </Button>
      </div>
    </form>
  );
};
