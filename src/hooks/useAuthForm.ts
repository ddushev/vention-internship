import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { AuthData } from "@/types";

interface FormValues {
  [key: string]: string;
}

interface UseFormProps {
  initialValues: FormValues;
  onSubmitHandler: (values: FormValues, setUserData: Dispatch<SetStateAction<AuthData>>, navigate: NavigateFunction) => Promise<void>;
  setAuthData: Dispatch<SetStateAction<AuthData>>;
}

export default function useAuthForm({ initialValues, onSubmitHandler, setAuthData }: UseFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const navigate = useNavigate();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((state) => ({ ...state, [event.target.name]: event.target.value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitHandler(values, setAuthData, navigate);
    setValues(initialValues);
  }

  return { values, onChangeHandler, onSubmit };
}
