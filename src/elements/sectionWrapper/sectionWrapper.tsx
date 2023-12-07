import styles from "./sectionWrapper.module.scss";

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.sectionWrapper}>
      <h3 className={styles.sectionHeading}>New Games</h3>
      <ul className={styles.sectionContainer}>{children}</ul>
    </div>
  );
}
