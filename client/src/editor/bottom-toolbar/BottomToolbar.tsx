import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import Button from "../../components/button/Button";
import "./bottomToolbar.css";
function BottomToolbar() {
  return (
    <div className="bottom-toolbar">
      <Button>
        <QuestionMarkOutlinedIcon style={{ fontSize: "16px" }} />
      </Button>
      <Button>
        <AspectRatioIcon style={{ fontSize: "16px" }} />
      </Button>
    </div>
  );
}

export default BottomToolbar;
