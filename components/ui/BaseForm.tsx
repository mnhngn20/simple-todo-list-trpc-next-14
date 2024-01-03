import { cn } from "@/utils/cn";
import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";

type BaseFormProps = {
  direction?: "vertical" | "horizontal";
  title?: string | ReactNode;
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export default function BaseForm({
  direction = "vertical",
  className,
  title,
  children,
  ...rest
}: BaseFormProps) {
  const baseFormClassName =
    direction === "vertical" ? "flex flex-col gap-4" : "flex gap-4";

  const renderTitle = () => {
    if (typeof title === "string") {
      return (
        <span className="text-primary text-center text-3xl font-bold">
          {title}
        </span>
      );
    } else if (typeof title === "function") {
      return title;
    }

    return undefined;
  };

  return (
    <form {...rest}>
      <div className={cn(baseFormClassName, className)}>
        {renderTitle()}
        {children}
      </div>
    </form>
  );
}
