import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const portalElement = document.getElementById("portal");
  if (!isOpen || !portalElement) return null;

  return createPortal(
    <div className={styles.modalContainer}>
      {children}
      <button type="submit" onClick={onClose}>
        Close
      </button>
    </div>,
    portalElement,
  );
}
