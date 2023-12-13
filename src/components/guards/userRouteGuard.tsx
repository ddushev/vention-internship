import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { AuthState } from "@/types";

interface UserRouteGuardProps {
  authState: AuthState;
}

export default function UserRouteGuard({ authState }: UserRouteGuardProps) {
  useEffect(() => {
    if (!authState?.authData?.username) {
      authState?.setIsSignInOpen(true);
    }
  }, [authState]);

  return <Outlet />;
}
