import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

import saveToCart from "@/utils/saveToCart";
import { Game } from "@/types";
import SignInModal from "@/components/account/signInModal";

interface ButtonProps {
  children: string;
  className: string;
  game: Game;
}

export default function ButtonAddToCart({ children, className, game }: ButtonProps) {
  const authData = useAppSelector((state) => state.authReduxState);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  if (authData.username && isSignInOpen) {
    setIsSignInOpen(false);
  }

  const handleOnClick = () => {
    if (authData.username) {
      saveToCart(game);
    } else {
      setIsSignInOpen(true);
    }
  };
  return (
    <>
      <button className={className} onClick={handleOnClick} type="button">
        {children}
      </button>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />
    </>
  );
}
