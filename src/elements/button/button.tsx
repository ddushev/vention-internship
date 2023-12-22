import styles from "./button.module.scss";

interface ButtonProps {
  children: string;
  submit?: boolean;
  onClick?: (param: boolean) => void;
}

export default function Button({ children, submit, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={() => onClick && onClick(true)} type={submit ? "submit" : "button"}>
      {children}
    </button>
  );
}
