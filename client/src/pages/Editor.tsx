import CanvasEditor from "../editor/canvas/CanvasEditor";
import EditorHeader from "../editor/editor-header/EditorHeader";
import EditorSidebar from "../editor/editor-sidebar/EditorSidebar";
import TopToolbar from "../editor/top-toolbar/TopToolbar";

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
              alignItems: "center",
              height: "-webkit-fill-available",
              flexDirection: "column",
            }}>
            <TopToolbar />
            <CanvasEditor />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
