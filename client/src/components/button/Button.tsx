import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { ReactNode, useRef } from "react";
import "./button.css";
function Button({
  children,
  variant = "text",
  handleClick = () => {},
  isDropDown = false,
  className = "",
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  handleClick?: () => void;
  isDropDown?: boolean;
  className?: string;
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
        <ArrowDropDownOutlinedIcon style={{ fontSize: "16px" }} />
      </div>
    );
  };
  return (
    <button
      ref={buttonRef}
      className={`button__wrapper button__${variant} ${className}`}
      onClick={handleBtnClick}>
      {children}
      {isDropDown && renderDropDown()}
    </button>
  );
}

export default Button;
