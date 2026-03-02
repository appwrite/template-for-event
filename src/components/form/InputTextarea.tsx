import { InputTextareaProps } from "@/components/form/index";

export const InputTextarea = (props: InputTextareaProps) => {
  return (
    <label className={"flex flex-col"}>
      <span className={"pb-1.5 text-sm text-neutral-250"}>{props.label}</span>
      <textarea
        {...props}
        className={
          "h-32 resize-none rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm outline-0 placeholder:text-sm placeholder:text-neutral-500 focus:border-neutral-200"
        }
      />
    </label>
  );
};
