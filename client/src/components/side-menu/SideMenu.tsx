import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import classNames from "classnames";
import { ComponentType, useEffect, useRef, useState } from "react";
import "./sideMenu.css";
import { MenuItem } from "./sideMenuType";
function SideMenu({
  menuItems,
  onTabChange,
  children,
}: {
  menuItems: MenuItem[];
  onTabChange: (id: string) => void;
  children?: React.ReactNode;
}) {
  const [menuSelectedPosition, setMenuSelectedPosition] = useState(
    0 - menuItems.length * 65
  );
  const SideMenuListItem = ({
    Icon,
    label,
    index,
    id,
  }: {
    label: String;
    Icon: ComponentType;
    index: Number;
    id: String;
  }) => (
    <div
      className="sidemenu__list-wrapper__list"
      onClick={() => handleMenuItemSelected(index, id)}>
      {Icon}
      <div className="sidemenu__list-wrapper__list__label"> {label}</div>
    </div>
  );
  const handleMenuItemSelected = (index: number, id: string) => {
    onTabChange(id);
    setIsMenuClose(false);
    setMenuSelectedPosition((index - menuItems.length) * 65);
  };
  const sidemenuRef = useRef(null);
  const [isMenuClose, setIsMenuClose] = useState(false);
  const [closeBtnPosition, setCloseBtnPosition] = useState({
    top: 0,
    left: 0,
  });
  const handleMenuClose = () => {
    setIsMenuClose((pre) => !pre);
  };
  useEffect(() => {
    setCloseBtnPosition({
      top: sidemenuRef.current?.offsetHeight / 2,
      left: sidemenuRef.current?.offsetWidth,
    });
  }, []);
  return (
    <div className="sidemenu" ref={sidemenuRef}>
      <div className="sidemenu__list-wrapper">
        {menuItems.map((item, index) => (
          <SideMenuListItem
            key={index}
            Icon={item.Icon}
            label={item.label}
            id={item.id}
            index={index}
          />
        ))}
        <div
          className={classNames(
            "sidemenu__list-wrapper__list sidemenu__list-wrapper__list--selected",
            {
              "sidemenu-close": isMenuClose,
            }
          )}
          style={{ top: menuSelectedPosition }}></div>
      </div>
      <div
        className={classNames("sidemenu__content", {
          "sidemenu-close": isMenuClose,
        })}>
        <div className="sidemenu__content__body">{children}</div>
        <div
          className="sidemenu__close-btn"
          onClick={handleMenuClose}
          style={{
            top: closeBtnPosition.top + "px",
            left: closeBtnPosition.left - 20 + "px",
          }}>
          <div>
            <KeyboardDoubleArrowLeftIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
