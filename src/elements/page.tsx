import styles from "./page.module.scss";

export default function Page({ children, title }: { children?: React.ReactNode; title: string }) {
  return (
    <div className={styles.backgroundWrapperImage}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
