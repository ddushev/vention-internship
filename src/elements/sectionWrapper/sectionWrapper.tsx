import styles from "./sectionWrapper.module.scss";

interface SectionWrapperProps {
  children: React.ReactNode;
  heading: string | undefined;
}

export default function SectionWrapper({ children, heading }: SectionWrapperProps) {
  return (
    <div className={styles.sectionWrapper}>
      <h3 className={styles.sectionHeading}>{heading}</h3>
      <ul className={styles.sectionContainer}>{children}</ul>
    </div>
  );
}
