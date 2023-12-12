import { Dispatch, SetStateAction, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { AuthData } from "@/types";

interface UserRouteGuardProps {
  authData: AuthData;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
  setTargetRoute: Dispatch<SetStateAction<string>>;
}

export default function UserRouteGuard({ authData, setIsSignInOpen, setTargetRoute }: UserRouteGuardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!authData?.username) {
      setIsSignInOpen(true);
      setTargetRoute(location.pathname);
      navigate("/");
    }
  }, [authData, setIsSignInOpen]);

  return <Outlet />;
}
