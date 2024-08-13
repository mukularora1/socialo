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
} from "@mui/icons-material";
import Button from "../../components/button/Button";
import InputBox from "../../components/input-box/InputBox";
import Tooltip from "../../components/tooltip/Tooltip";
import "./topToolbar.css";

const icons = [
  { component: OpacityIcon, tooltip: "Opacity" },
  { component: FormatBoldIcon, tooltip: "Bold" },
  { component: FormatItalicIcon, tooltip: "Italic" },
  { component: FormatUnderlinedIcon, tooltip: "Underline" },
  { component: FormatAlignLeftIcon, tooltip: "Align Left" },
  { component: FormatAlignRightIcon, tooltip: "Align Right" },
  { component: FormatAlignCenterIcon, tooltip: "Align Center" },
  { component: ColorLensIcon, tooltip: "Color" },
  {
    component: LockIcon,
    tooltip: "Lock",
  },
];

const IconButton = ({ Icon, tooltip }) => (
  <Tooltip title={tooltip}>
    <Button className="top-toolbar__btn">
      <Icon style={{ fontSize: "16px" }} />
    </Button>
  </Tooltip>
);

function TopToolbar() {
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
        {icons.map(({ component: Icon, tooltip }, index) => (
          <IconButton key={index} Icon={Icon} tooltip={tooltip} />
        ))}
        <InputBox placeholder="rotation in degree *" />
      </div>
    </div>
  );
}

export default TopToolbar;
