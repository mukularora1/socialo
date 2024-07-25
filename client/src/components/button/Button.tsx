import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useRef } from "react";
import "./button.css";
function Button({
  children,
  variant = "text",
  handleClick = () => {},
  isDropDown = false,
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  handleClick?: () => void;
  isDropDown?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleBtnClick = () => {
    if (isDropDown) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();

        // Position relative to the document
        const docX = rect.left + window.scrollX;
        const docY = rect.top + window.scrollY;

        // Position relative to the viewport
        const viewportX = rect.left;
        const viewportY = rect.top;

        console.log(`Document Position: (${docX}, ${docY})`);
        console.log(`Viewport Position: (${viewportX}, ${viewportY})`);
      }
    }
    handleClick();
  };
  const renderDropDown = () => {
    return (
      <div className="button__caret-down-icon-wrapper">
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    );
  };
  return (
    <button
      ref={buttonRef}
      className={`button__wrapper button__${variant}`}
      onClick={handleBtnClick}>
      {children}
      {isDropDown && renderDropDown()}
    </button>
  );
}

export default Button;
