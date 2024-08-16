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
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import InputBox from "../../components/input-box/InputBox";
import Tooltip from "../../components/tooltip/Tooltip";
import { setSelectedTab } from "../store/sideMenuEditorSlice";
import "./topToolbar.css";

const IconButton = ({ Icon, tooltip, method }) => (
  <Tooltip title={tooltip}>
    <Button className="top-toolbar__btn" handleClick={method}>
      <Icon style={{ fontSize: "16px" }} />
    </Button>
  </Tooltip>
);

function TopToolbar() {
  const dispatch = useDispatch();
  const icons = [
    { component: OpacityIcon, tooltip: "Opacity" },
    { component: FormatBoldIcon, tooltip: "Bold" },
    { component: FormatItalicIcon, tooltip: "Italic" },
    { component: FormatUnderlinedIcon, tooltip: "Underline" },
    { component: FormatAlignLeftIcon, tooltip: "Align Left" },
    { component: FormatAlignRightIcon, tooltip: "Align Right" },
    { component: FormatAlignCenterIcon, tooltip: "Align Center" },
    {
      component: ColorLensIcon,
      tooltip: "Color",
      method: () => dispatch(setSelectedTab("color")),
    },
    {
      component: LockIcon,
      tooltip: "Lock",
    },
    {
      component: UndoIcon,
      tooltip: "Undo",
    },
    {
      component: RedoIcon,
      tooltip: "Redo",
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
        {icons.map(({ component: Icon, tooltip, method }, index) => (
          <IconButton
            key={index}
            Icon={Icon}
            tooltip={tooltip}
            method={method}
          />
        ))}
        <InputBox placeholder="rotation in degree *" />
      </div>
    </div>
  );
}

export default TopToolbar;
