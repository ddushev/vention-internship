import cx from "classnames";

import styles from "./button.module.scss";

interface ButtonProps {
  children: string;
  submit?: boolean;
  onClick?: (param: boolean) => void;
  className?: string;
}

export default function Button({ children, submit, onClick, className }: ButtonProps) {
  return (
    <button className={cx(styles.button, className)} onClick={() => onClick && onClick(true)} type={submit ? "submit" : "button"}>
      {children}
    </button>
  );
}
