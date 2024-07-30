import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import "./bottomToolbar.css";
function BottomToolbar() {
  return (
    <div className="bottom-toolbar">
      <QuestionMarkOutlinedIcon style={{ fontSize: "16px" }} />
      <AspectRatioIcon style={{ fontSize: "16px" }} />
    </div>
  );
}

export default BottomToolbar;
