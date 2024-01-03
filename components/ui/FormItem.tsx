import { PropsWithChildren } from "react";

type FormItemProps = {
  label?: string;
  error?: string;
  required?: boolean;
};

export default function FormItem({
  children,
  error,
  label,
  required,
}: PropsWithChildren<FormItemProps>) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm">
        {label}
        <span className="text-red-500">{required ? " *" : ""}</span>
      </span>
      {children}
      <span className="flex flex-col text-sm gap-1 text-red-500">{error}</span>
    </div>
  );
}
