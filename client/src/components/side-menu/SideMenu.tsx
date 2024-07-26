import {
  faArrowCircleLeft,
  faJarWheat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import "./sideMenu.css";
function SideMenu() {
  const sidemenuRef = useRef(null);
  const [isMenuClose, setIsMenuClose] = useState(false);
  const [closeBtnPosition, setCloseBtnPosition] = useState({
    top: 0,
    left: 0,
  });
  const handleMenuClose = () => {
    setIsMenuClose(true);
  };
  useEffect(() => {
    setCloseBtnPosition({
      top: sidemenuRef.current?.offsetHeight / 2,
      left: sidemenuRef.current?.offsetWidth,
    });
    console.log(sidemenuRef.current?.offsetHeight);
  }, []);
  return (
    <div
      className={classNames("sidemenu", { "sidemenu-close": isMenuClose })}
      ref={sidemenuRef}>
      <div className="sidemenu__list-wrapper">
        <div className="sidemenu__list-wrapper__list">
          <FontAwesomeIcon icon={faJarWheat} />
        </div>
        <div className="sidemenu__list-wrapper__list">
          <FontAwesomeIcon icon={faJarWheat} />
        </div>
        <div className="sidemenu__list-wrapper__list">
          <FontAwesomeIcon icon={faJarWheat} />
        </div>
        <div className="sidemenu__list-wrapper__list">
          <FontAwesomeIcon icon={faJarWheat} />
        </div>
      </div>
      <div className="sidemenu__content-wrapper">hello world</div>
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
    </div>
  );
}

export default SideMenu;
