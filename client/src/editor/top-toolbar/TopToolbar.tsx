import {
  ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
  ColorLens as ColorLensIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import Button from "../../components/button/Button";
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
        {icons.map(({ component: Icon, tooltip }, index) => (
          <IconButton key={index} Icon={Icon} tooltip={tooltip} />
        ))}
      </div>
    </div>
  );
}

export default TopToolbar;
