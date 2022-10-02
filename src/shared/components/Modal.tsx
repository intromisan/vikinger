import { ReactNode, FC, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

interface ModalProps {
  children?: ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}

const modals = document.getElementById("modals");

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalContainerClass = classNames({
    modal_container: true,
    show: isOpen,
  });

  return (
    modals &&
    ReactDOM.createPortal(
      <div className={modalContainerClass}>
        <div className="modal_backdrop" onClick={onClose} />
        <div className="modal_card">
          {children}
          <div className="modal_close-button" onClick={onClose}>
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>,
      modals
    )
  );
};

export default Modal;
