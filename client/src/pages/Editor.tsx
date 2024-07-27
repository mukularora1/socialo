import CanvasEditor from "../editor/canvas/CanvasEditor";
import EditorHeader from "../editor/editor-header/EditorHeader";
import EditorSidebar from "../editor/editor-sidebar/EditorSidebar";

function Editor() {
  return (
    <>
      <EditorHeader />
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)",
          backgroundColor: "#EBEBEB",
        }}>
        <EditorSidebar />
        <div
          style={{
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "-webkit-fill-available",
            }}>
            <CanvasEditor />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
