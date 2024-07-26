import TopHeaderBar from "../components/header/TopHeaderBar";
import CanvasEditor from "../editor/canvas/CanvasEditor";
import EditorSidebar from "../editor/editor-sidebar/EditorSidebar";

function Editor() {
  return (
    <>
      <TopHeaderBar>Editor HEADER</TopHeaderBar>
      <div style={{ display: "flex" }}>
        <EditorSidebar />
        <div>
          <CanvasEditor />
        </div>
      </div>
    </>
  );
}

export default Editor;
