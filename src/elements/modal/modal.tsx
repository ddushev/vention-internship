import closeIcon from "images/icons/close.svg";

import { createPortal } from "react-dom";
import { FormEvent, KeyboardEvent } from "react";
import Button from "../button/button";

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

  const handleModalInteraction = (event: FormEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <div role="button" tabIndex={0} className={styles.modalPageOverlay} onClick={onClose} onKeyDown={onClose}>
      <div role="button" tabIndex={0} className={styles.modalContainer} onClick={handleModalInteraction} onKeyDown={handleModalInteraction}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            <img className={styles.closeIcon} src={closeIcon} alt="close-icon" />
          </button>
        </div>
        <form onSubmit={(event) => onSubmit(event)}>
          {children}
          {/* <button type="submit">Submit</button> */}
          <Button className={styles.submitBtn} submit>
            Submit
          </Button>
        </form>
      </div>
    </div>,
    portalElement,
  );
}
