import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import { ComponentType, useRef, useState } from "react";
import "./sideMenu.css";
function SideMenu() {
  const menuItems = [
    { Icon: InterestsOutlinedIcon, label: "Element" },
    { Icon: TextFieldsOutlinedIcon, label: "Text" },
    { Icon: CloudUploadOutlinedIcon, label: "Uploads" },
    { Icon: BrushOutlinedIcon, label: "Draw" },
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
      <Icon />
      <div className="sidemenu__list-wrapper__list__label"> {label}</div>
    </div>
  );
  const handleMenuItemSelected = (index: number) => {
    setMenuSelectedPosition((index - menuItems.length) * 65);
  };
  const sidemenuRef = useRef(null);
  // const [isMenuClose, setIsMenuClose] = useState(false);
  // const [closeBtnPosition, setCloseBtnPosition] = useState({
  //   top: 0,
  //   left: 0,
  // });
  // const handleMenuClose = () => {
  //   setIsMenuClose(true);
  // };
  // useEffect(() => {
  //   setCloseBtnPosition({
  //     top: sidemenuRef.current?.offsetHeight / 2,
  //     left: sidemenuRef.current?.offsetWidth,
  //   });
  //   console.log(sidemenuRef.current?.offsetHeight);
  // }, []);
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
          className="sidemenu__list-wrapper__list sidemenu__list-wrapper__list--selected"
          style={{ top: menuSelectedPosition }}></div>
      </div>
      {/* <div
        className={classNames("sidemenu__content", {
          "sidemenu-close": isMenuClose,
        })}>
        <div className="sidemenu__content__body">hello world</div>
        <div
          className="sidemenu__close-btn"
          onClick={handleMenuClose}
          style={{
            top: closeBtnPosition.top + "px",
            left: closeBtnPosition.left - 20 + "px",
          }}>
          <div>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SideMenu;
