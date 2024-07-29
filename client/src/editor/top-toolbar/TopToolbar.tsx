import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import OpacityIcon from "@mui/icons-material/Opacity";
import Button from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";
import "./topToolbar.css";
function TopToolbar() {
  return (
    <div className="top-toolbar">
      <div className="top-toolbar__text-btn">
        <Tooltip>
          <Button>
            <OpacityIcon style={{ fontSize: "16px" }} />
          </Button>
        </Tooltip>
        <Button>
          <FormatBoldIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <FormatItalicIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <FormatUnderlinedIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <FormatAlignLeftIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <FormatAlignRightIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <FormatAlignCenterIcon style={{ fontSize: "16px" }} />
        </Button>
        <Button>
          <ColorLensIcon style={{ fontSize: "16px" }} />
        </Button>
      </div>
    </div>
  );
}

export default TopToolbar;
