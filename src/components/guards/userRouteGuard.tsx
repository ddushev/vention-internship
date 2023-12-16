import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@/redux/hooks";

import SignInModal from "@/elements/modal/signInModal";

export default function UserRouteGuard() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const authData = useAppSelector((state) => state.authReduxState);

  useEffect(() => {
    if (!authData?.username) {
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
