import { ReactNode, useState } from "react";
import Button from "../button/Button";
import "./dropDown.css";

function DropDown({ children }: { children: ReactNode }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);
  return (
    <div
      className="drop-down"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}>
      <Button isDropDown={true}>{children}</Button>
      {isDropdownVisible && <div className="drop-down__wrapper">hello</div>}
    </div>
  );
}

export default DropDown;
