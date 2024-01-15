import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuthState } from "@/redux/authSlice";
import { getUserProfile } from "@/api/apiUser";
import { AuthData, UserMockData } from "@/types";

import SignInModal from "@/components/account/signInModal";

export default function UserRouteGuard() {
  const dispatch = useAppDispatch();
  const dispatchSetAuthState = (data: AuthData) => {
    dispatch(setAuthState(data));
  };
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const authData = useAppSelector((state) => state.authReduxState);
  useEffect(() => {
    if (!authData.username && isSession) {
      getUserProfile().then((userData: UserMockData) => dispatchSetAuthState({ username: userData.username, isAdmin: userData.isAdmin }));
      setIsSession(false);
    }

    if (!authData?.username && !isSession) {
      setIsSignInOpen(true);
    } else {
      setIsSignInOpen(false);
    }
  }, [authData]);

  return (
    <>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />
      <Outlet />
    </>
  );
}
