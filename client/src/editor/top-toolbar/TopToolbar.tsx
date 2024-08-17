import {
  ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
  AutoFixHighOutlined as AutoFixHighOutlinedIcon,
  ColorLens as ColorLensIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  Lock as LockIcon,
  Opacity as OpacityIcon,
  Redo as RedoIcon,
  Undo as UndoIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import InputBox from "../../components/input-box/InputBox";
import Tooltip from "../../components/tooltip/Tooltip";
import { selectCanvasStore } from "../store/editorSlice";
import { setSelectedTab } from "../store/sideMenuEditorSlice";
import "./topToolbar.css";

const IconButton = ({ Icon, tooltip, method, isShow }) => {
  return (
    <>
      {isShow && (
        <Tooltip title={tooltip}>
          <Button className="top-toolbar__btn" handleClick={method}>
            <Icon style={{ fontSize: "16px" }} />
          </Button>
        </Tooltip>
      )}
    </>
  );
};

function TopToolbar() {
  const dispatch = useDispatch();
  const canvasStore = useSelector(selectCanvasStore);
  const [isSvg, setIsSvg] = useState(false);
  useEffect(() => {
    if (canvasStore.selectedObject) {
      const { type } = canvasStore.selectedObject;
      console.log(type, type === "svg" || type === "path" || type === "group");

      setIsSvg(type === "svg" || type === "path" || type === "group");
    }
  }, [canvasStore.selectedObject]);
  const icons = [
    { component: OpacityIcon, tooltip: "Opacity", isShow: false },
    { component: FormatBoldIcon, tooltip: "Bold", isShow: isSvg },
    { component: FormatItalicIcon, tooltip: "Italic", isShow: isSvg },
    { component: FormatUnderlinedIcon, tooltip: "Underline", isShow: isSvg },
    { component: FormatAlignLeftIcon, tooltip: "Align Left", isShow: isSvg },
    { component: FormatAlignRightIcon, tooltip: "Align Right", isShow: isSvg },
    {
      component: FormatAlignCenterIcon,
      tooltip: "Align Center",
      isShow: isSvg,
    },
    {
      component: ColorLensIcon,
      tooltip: "Color",
      method: () => dispatch(setSelectedTab("color")),
      isShow: isSvg,
    },
    {
      component: LockIcon,
      tooltip: "Lock",
      isShow: isSvg,
    },
    {
      component: UndoIcon,
      tooltip: "Undo",
      isShow: isSvg,
    },
    {
      component: RedoIcon,
      tooltip: "Redo",
      isShow: isSvg,
    },
  ];
  return (
    <div className="top-toolbar">
      <div className="top-toolbar__text-btn">
        <Button className="top-toolbar__text-btn__font-styles">
          font style <ArrowDropDownOutlinedIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button className="top-toolbar__text-btn__font-styles">
          Edit <AutoFixHighOutlinedIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button className="top-toolbar__text-btn__font-styles">Group</Button>
        {icons.map(({ component: Icon, tooltip, method, isShow }, index) => (
          <IconButton
            key={index}
            Icon={Icon}
            tooltip={tooltip}
            method={method}
            isShow={isShow}
          />
        ))}
        <InputBox placeholder="rotation in degree *" />
        {isSvg}
      </div>
    </div>
  );
}

export default TopToolbar;
