import styles from "./input.module.scss";

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
}

export default function Input({ label, type, id, name }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input className={styles.input} type={type} id={id} name={name} />
    </div>
  );
}
