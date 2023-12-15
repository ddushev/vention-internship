import { Dispatch, SetStateAction } from "react";

import { onRegisterSubmit } from "@/api/apiAuth";
import useAuthForm from "@/hooks/useAuthForm";

import Modal from "./modal";
import Input from "../input/input";

interface SignUpModalProps {
  isSignUpOpen: boolean;
  setIsSignUpOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpModal({ isSignUpOpen, setIsSignUpOpen }: SignUpModalProps) {
  const handleSignInModalClose = () => {
    setIsSignUpOpen(false);
  };
  const {
    values: registerValues,
    onChangeHandler: onRegisterInputChange,
    onSubmit: onRegisterSubmitHandler,
  } = useAuthForm({
    initialValues: {
      username: "",
      password: "",
      rePassword: "",
    },
    onSubmitHandler: onRegisterSubmit,
  });

  return (
    <Modal title="Authorization" isOpen={isSignUpOpen} onClose={handleSignInModalClose} onSubmit={onRegisterSubmitHandler}>
      <Input label="Login" type="text" id="username" name="username" values={registerValues} onInputChange={onRegisterInputChange} />
      <Input label="Password" type="password" id="password" name="password" values={registerValues} onInputChange={onRegisterInputChange} />
    </Modal>
  );
}
