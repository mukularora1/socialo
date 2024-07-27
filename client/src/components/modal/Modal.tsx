import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

function Modal({
  backdrop = false,
  onClose,
  show = false,
  children,
}: {
  backdrop?: boolean;
  onClose?: () => void;
  show: boolean;
  children?: ReactNode;
}) {
  const [isModalShow, setIsModalShow] = useState(show);
  useEffect(() => {
    setIsModalShow(show);
  }, [show]);
  const handleClose = () => {
    setIsModalShow(false);
    if (onClose) {
      onClose();
    }
  };
  return createPortal(
    <>
      {isModalShow && (
        <div
          className={classNames("modal", { "modal--backdrop": backdrop })}
          onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
