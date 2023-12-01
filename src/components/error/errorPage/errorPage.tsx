import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./errorPage.module.scss";

interface ErrorPageProps {
  onResetError: () => void;
}

export default function ErrorPage({ onResetError }: ErrorPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/something-went-wrong");
  }, []);

  const handleGoHome = () => {
    onResetError();
    navigate("/");
  };
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorHeading}>Ops. Something went wrong!</h2>
      <button className={styles.errorButton} type="button" onClick={handleGoHome}>
        Go to Home page.
      </button>
    </div>
  );
}
