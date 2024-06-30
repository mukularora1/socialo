import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import "./button.css";
function Button({
  children,
  variant = "text",
  handleClick,
  isDropDown = false,
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  handleClick?: () => void;
  isDropDown?: boolean;
}) {
  const renderDropDown = () => {
    return (
      <div className="button__caret-down-icon-wrapper">
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    );
  };
  return (
    <button
      className={`button__wrapper button__${variant}`}
      onClick={handleClick}>
      {children}
      {isDropDown && renderDropDown()}
    </button>
  );
}

export default Button;
