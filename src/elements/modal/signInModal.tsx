import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { onLoginSubmit } from "@/api/apiAuth";
import useAuthForm from "@/hooks/useAuthForm";
import PATHS from "@/utils/paths";
import { AuthData } from "@/types";

import Modal from "./modal";
import Input from "../input/input";

interface SignInModalProps {
  isSignInOpen: boolean;
  setIsSignInOpen: Dispatch<SetStateAction<boolean>>;
  authData: AuthData;
}

export default function SignInModal({ isSignInOpen, setIsSignInOpen, authData }: SignInModalProps) {
  const navigate = useNavigate();
  const handleSignInModalClose = () => {
    setIsSignInOpen(false);
    if (!authData.username) {
      navigate(PATHS.HOME);
    }
  };
  const {
    values: loginValues,
    onChangeHandler: onLoginInputChange,
    onSubmit: onLoginSubmitHandler,
  } = useAuthForm({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmitHandler: onLoginSubmit,
  });

  return (
    <Modal title="Authorization" isOpen={isSignInOpen} onClose={handleSignInModalClose} onSubmit={onLoginSubmitHandler}>
      <Input label="Login" type="text" id="username" name="username" values={loginValues} onInputChange={onLoginInputChange} />
      <Input label="Password" type="password" id="password" name="password" values={loginValues} onInputChange={onLoginInputChange} />
    </Modal>
  );
}
