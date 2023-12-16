import { FormEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/redux/hooks";
import { setAuthState } from "@/redux/authSlice";
import { AuthData } from "@/types";

interface FormValues {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormValues;
  onSubmitHandler: (values: FormValues, dispatchSetAuthState: (data: AuthData) => void, navigate: NavigateFunction) => Promise<void>;
}

export default function useAuthForm({ initialValues, onSubmitHandler }: UseFormProps) {
  const dispatch = useAppDispatch();
  const dispatchSetAuthState = (data: AuthData) => {
    dispatch(setAuthState(data));
  };

  const [values, setValues] = useState<FormValues>(initialValues);
  const navigate = useNavigate();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((state) => ({ ...state, [event.target.name]: event.target.value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitHandler(values, dispatchSetAuthState, navigate);
    setValues(initialValues);
  }

  return { values, onChangeHandler, onSubmit };
}
