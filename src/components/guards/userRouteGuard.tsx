import { Dispatch, SetStateAction, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { AuthData } from "@/types";

interface UserRouteGuardProps {
  authData: AuthData;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
}

export default function UserRouteGuard({ authData, setIsSignInOpen }: UserRouteGuardProps) {
  useEffect(() => {
    if (!authData?.username) {
      setIsSignInOpen(true);
    }
  }, [authData, setIsSignInOpen]);

  return <Outlet />;
}
