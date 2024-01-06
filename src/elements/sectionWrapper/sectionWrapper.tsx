import styles from "./sectionWrapper.module.scss";

interface SectionWrapperProps {
  children: React.ReactNode;
  heading: string | undefined | null;
  isNarrow?: boolean;
}

export default function SectionWrapper({ children, heading, isNarrow }: SectionWrapperProps) {
  return (
    <div className={styles.sectionWrapper}>
      <h3 className={isNarrow ? styles.sectionHeadingNarrow : styles.sectionHeading}>{heading}</h3>
      <ul className={styles.sectionContainer}>{children}</ul>
    </div>
  );
}
