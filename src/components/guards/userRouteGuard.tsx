import { Navigate, Outlet } from "react-router-dom";

import { AuthData } from "@/types";
import PATHS from "@/utils/paths";

interface UserRouteGuardProps {
  authData: AuthData;
}

export default function UserRouteGuard({ authData }: UserRouteGuardProps) {
  if (!authData?.username) {
    return <Navigate to={PATHS.SIGN_IN} />;
  }

  return <Outlet />;
}
