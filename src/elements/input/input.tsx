import styles from "./input.module.scss";

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  values: {
    [key: string]: string;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, type, id, name, values, onInputChange }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input onChange={(event) => onInputChange(event)} className={styles.input} type={type} id={id} name={name} value={values[name]} />
    </div>
  );
}
