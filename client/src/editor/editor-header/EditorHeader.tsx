import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import Button from "../../components/button/Button";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import "./editorHeader.css";
function EditorHeader() {
  return (
    <TopHeaderBar height="50px" className="editor-header">
      <div className="editor-header__right-btns">
        <Button variant="outlined">
          Download
          <DownloadIcon sx={{ fontSize: "18px" }} />
        </Button>
        <Button variant="text">
          Share <ShareIcon sx={{ fontSize: "18px" }} />
        </Button>
      </div>
    </TopHeaderBar>
  );
}

export default EditorHeader;
