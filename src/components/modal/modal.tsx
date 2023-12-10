import closeIcon from "images/icons/close.svg";

import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  const portalElement = document.getElementById("portal");
  if (!isOpen || !portalElement) return null;

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <button onClick={onClose} type="button">
          <img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
        </button>
      </div>
      <form>
        {children}
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>,
    portalElement,
  );
}
