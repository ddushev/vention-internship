import styles from "./filterWrapper.module.scss";

interface FilterWrapperProps {
  children: React.ReactNode;
  heading: string | undefined;
}

export default function FilterWrapper({ children, heading }: FilterWrapperProps) {
  return (
    <div className={styles.filterWrapper}>
      <h4 className={styles.filterHeading}>{heading}</h4>
      <ul className={styles.filterContainer}>{children}</ul>
    </div>
  );
}
