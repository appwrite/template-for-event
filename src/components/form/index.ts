import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputText } from "@/components/form/InputText";
import { InputTextarea } from "@/components/form/InputTextarea";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
export type InputTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export { InputText, InputTextarea };
