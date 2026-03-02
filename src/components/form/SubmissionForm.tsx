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
      <div className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-850 p-5">
        <div>
          <InputText
            label="Project title"
            placeholder="Enter project title"
            {...register("title", { required: "Project title is required" })}
            defaultValue={submission?.title}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <InputTextarea
            label="Project description"
            placeholder="Enter project description"
            {...register("description", {
              required: "Description is required",
            })}
            defaultValue={submission?.description}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <InputTextarea
            label="Inspiration behind the project"
            placeholder="What inspired this project?"
            {...register("inspiration", {
              required: "Inspiration is required",
            })}
            defaultValue={submission?.inspiration}
          />
          {errors.inspiration && (
            <p className="mt-1 text-sm text-red-600">
              {errors.inspiration.message}
            </p>
          )}
        </div>

        <div>
          <InputTextarea
            label="Tech stack"
            placeholder="Tech stack used"
            {...register("stack", { required: "Tech stack is required" })}
            defaultValue={submission?.stack}
          />
          {errors.stack && (
            <p className="mt-1 text-sm text-red-600">{errors.stack.message}</p>
          )}
        </div>

        <div>
          <InputText
            label="Repository link"
            placeholder="Enter repository link"
            {...register("repositoryLink", {
              required: "Repository link is required",
              pattern: {
                value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/.*)?$/i,
                message: "Enter a valid URL",
              },
            })}
            defaultValue={submission?.repositoryLink}
          />
          {errors.repositoryLink && (
            <p className="mt-1 text-sm text-red-600">
              {errors.repositoryLink.message}
            </p>
          )}
        </div>

        <div>
          <InputText
            label="Demo link"
            placeholder="Enter demo link"
            {...register("demoLink", {
              required: "Demo link is required",
              pattern: {
                value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/.*)?$/i,
                message: "Enter a valid URL",
              },
            })}
            defaultValue={submission?.demoLink}
          />
          {errors.demoLink && (
            <p className="mt-1 text-sm text-red-600">
              {errors.demoLink.message}
            </p>
          )}
        </div>
      </div>

      <div className="my-5 flex flex-row justify-end gap-2">
        <Button
          buttonType="secondary"
          type="button"
          onClick={() => redirect("/hacker")}
        >
          Cancel
        </Button>
        <Button buttonType="primary" type="submit">
          {submission ? "Save changes" : "Submit"}
        </Button>
      </div>
    </form>
  );
};
