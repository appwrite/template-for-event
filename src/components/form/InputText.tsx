import { InputTextProps } from "@/components/form/index";

export const InputText = (props: InputTextProps) => {
  return (
    <label className={"flex flex-col"}>
      <span className={"pb-1.5 text-sm text-neutral-250"}>{props.label}</span>
      <input
        {...props}
        className={
          "rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm outline-0 placeholder:text-sm placeholder:text-neutral-500 focus:border-neutral-200"
        }
      />
    </label>
  );
};
