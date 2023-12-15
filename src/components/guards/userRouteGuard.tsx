import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { setIsSignInOpen } from "@/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function UserRouteGuard() {
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.authReduxState.authData);
  useEffect(() => {
    if (!authData?.username) {
      dispatch(setIsSignInOpen(true));
    }
  }, [authData]);

  return <Outlet />;
}
