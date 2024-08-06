import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ImageIcon from "@mui/icons-material/Image";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import classNames from "classnames";
import { ComponentType, useEffect, useRef, useState } from "react";
// import ColorPickerTab from "../../editor/side-menu-tabs/color-picker-tab/ColorPickerTab";
import ElementsTab from "../../editor/side-menu-tabs/elements-tab/ElementsTab";
import "./sideMenu.css";
function SideMenu() {
  const menuItems = [
    { Icon: InterestsOutlinedIcon, label: "Element" },
    { Icon: TextFieldsOutlinedIcon, label: "Text" },
    { Icon: CloudUploadOutlinedIcon, label: "Uploads" },
    { Icon: BrushOutlinedIcon, label: "Draw" },
    {
      Icon: LayersOutlinedIcon,
      label: "Pages",
    },
    {
      Icon: ImageIcon,
      label: "Images",
    },
  ];
  const [menuSelectedPosition, setMenuSelectedPosition] = useState(
    0 - menuItems.length * 65
  );
  const SideMenuListItem = ({
    Icon,
    label,
    index,
  }: {
    label: string;
    Icon: ComponentType;
    index: number;
  }) => (
    <div
      className="sidemenu__list-wrapper__list"
      onClick={() => handleMenuItemSelected(index)}>
      <Icon sx={{ fontSize: "20px" }} />
      <div className="sidemenu__list-wrapper__list__label"> {label}</div>
    </div>
  );
  const handleMenuItemSelected = (index: number) => {
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
    console.log(sidemenuRef.current?.offsetHeight);
  }, []);
  return (
    <div className="sidemenu" ref={sidemenuRef}>
      <div className="sidemenu__list-wrapper">
        {menuItems.map((item, index) => (
          <SideMenuListItem
            key={index}
            Icon={item.Icon}
            label={item.label}
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
        <div className="sidemenu__content__body">
          {/* <ColorPickerTab /> */}
          <ElementsTab />
        </div>
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
