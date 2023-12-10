import { useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
}

export default function Input({ label, type, id, name }: InputProps) {
  const [value, setValue] = useState("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input onChange={(event) => onChangeHandler(event)} className={styles.input} type={type} id={id} name={name} value={value} />
    </div>
  );
}
