import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface FormValues {
  [key: string]: string;
}

interface FormProps {
  initialValues: FormValues;
  onSubmitHandler: (values: FormValues, setUserData: Dispatch<SetStateAction<object>>) => Promise<void>;
  setAuthData: Dispatch<SetStateAction<object>>;
}

export default function useForm({ initialValues, onSubmitHandler, setAuthData }: FormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((state) => ({ ...state, [event.target.name]: event.target.value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitHandler(values, setAuthData);
    setValues(initialValues);
  }

  return { values, onChangeHandler, onSubmit };
}
