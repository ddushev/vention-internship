import styles from "./inlineLabel.module.scss";

export default function InlineLabel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className={styles.inlineLabel}>
      <label className={styles.labelText}>{label}</label>
      {children}
    </div>
  );
}
