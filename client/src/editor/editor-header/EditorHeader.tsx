import Button from "../../components/button/Button";
import TopHeaderBar from "../../components/header/TopHeaderBar";
import "./editorHeader.css";
function EditorHeader() {
  return (
    <TopHeaderBar height="50px">
      <div className="editor-header__right-btns">
        <Button variant="outlined">Download</Button>
        <Button variant="contained">Share</Button>
      </div>
    </TopHeaderBar>
  );
}

export default EditorHeader;
