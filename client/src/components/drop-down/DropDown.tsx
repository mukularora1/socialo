import { ReactNode } from "react";
import Button from "../button/Button";
import "./dropDown.css";

function DropDown({ children }: { children: ReactNode }) {
  return (
    <div>
      <Button isDropDown={true}>{children}</Button>
      <div className="drop-down__wrapper">hello</div>
    </div>
  );
}

export default DropDown;
