import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@/redux/hooks";

import SignInModal from "@/components/account/signInModal";

export default function UserRouteGuard() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const authData = useAppSelector((state) => state.authReduxState);
  useEffect(() => {
    if (authData?.username || isSession) {
      setIsSession(false);
      setIsSignInOpen(false);
    } else {
      setIsSignInOpen(true);
    }
  }, [authData]);

  return (
    <>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />
      <Outlet />
    </>
  );
}
