import classNames from "classnames";
import { useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

function Modal({
  backdrop = false,
  onClose,
  show = false,
}: {
  backdrop?: boolean;
  onClose?: () => void;
  show: boolean;
}) {
  const [isModalShow, setIsModalShow] = useState(show);
  const handleClose = () => {
    setIsModalShow((pre) => !pre);
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
            hello world
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
