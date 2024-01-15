import { PropsWithChildren } from "react";
import { Skeleton } from ".";

interface FormSkeletonProps {
  loading?: boolean;
}

export default function FormSkeleton({
  children,
  loading,
}: PropsWithChildren<FormSkeletonProps>) {
  return (
    <>
      {loading ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
