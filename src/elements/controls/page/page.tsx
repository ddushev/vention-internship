import styles from "./page.module.scss";

interface PageProps {
  children?: React.ReactNode;
  title: string;
}

export default function Page({ children, title }: PageProps) {
  return (
    <div className={styles.backgroundWrapperImage}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
