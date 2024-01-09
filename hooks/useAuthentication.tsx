import { getAccessToken } from "@/utils/token";
import { useEffect, useState } from "react";

export enum AuthenticationState {
  Authenticated,
  NotAuthenticated,
  Pending,
}

export default function useAuthentication() {
  const [state, setState] = useState<AuthenticationState>(
    AuthenticationState.Pending
  );

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setState(AuthenticationState.Authenticated);
    } else {
      setState(AuthenticationState.NotAuthenticated);
    }
  }, []);

  return {
    state,
  };
}
