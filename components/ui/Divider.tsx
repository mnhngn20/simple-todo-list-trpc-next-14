import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type DividerProps = {
  content?: string;
  className?: string;
  lineProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export default function Divider({
  content,
  className,
  lineProps,
}: DividerProps) {
  return (
    <div className={twMerge("my-3", className)}>
      {content ? (
        <div
          {...lineProps}
          className={twMerge(
            "flex items-center gap-4 text-gray-500 text-sm",
            lineProps?.className
          )}
        >
          <div className="h-[1px] w-full bg-border" />
          {content}
          <div className="h-[1px] w-full bg-border" />
        </div>
      ) : (
        <div
          {...lineProps}
          className={twMerge("h-[1px] bg-border", lineProps?.className)}
        />
      )}
    </div>
  );
}
