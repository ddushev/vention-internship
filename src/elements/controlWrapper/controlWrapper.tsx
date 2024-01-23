import styles from "./controlWrapper.module.scss";

export default function ControlWrapper({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <div className={styles.controlWrapper}>
      <label className={styles.labelText}>{text}</label>
      {children}
    </div>
  );
}
