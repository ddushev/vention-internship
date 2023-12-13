import closeIcon from "images/icons/close.svg";

import { createPortal } from "react-dom";
import { FormEvent } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Modal({ title, isOpen, onClose, children, onSubmit }: ModalProps) {
  const portalElement = document.getElementById("portal");
  if (!isOpen || !portalElement) return null;

  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{title}</h2>
        <button className={styles.closeBtn} onClick={onClose} type="button">
          <img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
        </button>
      </div>
      <form onSubmit={(event) => onSubmit(event)}>
        {children}
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>,
    portalElement,
  );
}
