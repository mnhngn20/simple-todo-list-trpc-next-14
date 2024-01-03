import { useToast } from "@/components/ui/use-toast";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { useCallback } from "react";

export default function useNotification() {
  const { toast, ...rest } = useToast();

  const showSuccess = useCallback(
    (
      description: string = "",
      options?: Omit<Parameters<typeof toast>[0], "title" | "description">
    ) =>
      toast({
        title: "Success",
        description,
        duration: 5000,
        action: <CheckCircleIcon color="green" />,
        ...options,
      }),
    [toast]
  );

  const showError = useCallback(
    (
      description: string = "",
      options?: Omit<Parameters<typeof toast>[0], "title" | "description">
    ) =>
      toast({
        title: "Error",
        description,
        variant: "destructive",
        action: <XCircleIcon color="white" />,
        duration: 5000,
        ...options,
      }),
    [toast]
  );

  return {
    ...rest,
    showSuccess,
    showError,
  };
}
