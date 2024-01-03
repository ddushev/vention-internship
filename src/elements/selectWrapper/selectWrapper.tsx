import styles from "./selectWrapper.module.scss";

interface SelectWrapperProps {
  children: React.ReactNode;
  heading: string | undefined;
}

export default function SelectWrapper({ children, heading }: SelectWrapperProps) {
  return (
    <div className={styles.selectFilterContainer}>
      <span className={styles.selectName}>{heading}</span>
      {children}
    </div>
  );
}
