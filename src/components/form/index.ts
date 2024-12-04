import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
export type InputTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

import { InputText } from "@/components/form/InputText";
import { InputTextarea } from "@/components/form/InputTextarea";

export { InputText, InputTextarea };
