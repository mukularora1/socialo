import { ReactElement, ReactNode, useState } from "react";
import "./dropDown.css";

function DropDown({
  children,
  anchorEl,
}: {
  children: ReactNode;
  anchorEl: HTMLElement | ReactElement | any;
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);
  return (
    <div
      className="drop-down"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}>
      {anchorEl}
      {isDropdownVisible && (
        <div className="drop-down__wrapper">{children}</div>
      )}
    </div>
  );
}

export default DropDown;
