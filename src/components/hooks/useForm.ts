import { FormEvent, useState } from "react";

interface FormValues {
  [key: string]: string;
}

interface FormProps {
  initialValues: FormValues;
  onSubmitHandler: (values: FormValues) => object;
}

export default function useForm({ initialValues, onSubmitHandler }: FormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((state) => ({ ...state, [event.target.name]: event.target.value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitHandler(values);
  }

  return {
    values,
    onChangeHandler,
    onSubmit,
  };
}
