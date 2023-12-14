import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAuthContext } from "@/contexts/authContext";

export default function UserRouteGuard() {
  const { authState } = useAuthContext();
  useEffect(() => {
    if (!authState?.authData?.username) {
      authState?.setIsSignInOpen(true);
    }
  }, [authState]);

  return <Outlet />;
}
