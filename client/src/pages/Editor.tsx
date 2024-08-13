import BottomToolbar from "../editor/bottom-toolbar/BottomToolbar";
import CanvasEditor from "../editor/canvas/CanvasEditor";
import EditorHeader from "../editor/editor-header/EditorHeader";
import EditorSidebar from "../editor/editor-sidebar/EditorSidebar";
import TopToolbar from "../editor/top-toolbar/TopToolbar";

function Editor() {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("handleDragOver", e);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("handleDragLeave", e);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("handleDrop", e);
  };
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
            <div
              style={{ padding: "12px 0" }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}>
              <CanvasEditor />
              <div
                className="editor__add-new-page"
                style={{
                  border: "1px dashed gray",
                  padding: "8px",
                  marginTop: " 8px",
                  textAlign: "center",
                  cursor: "pointer",
                }}>
                Add new page
              </div>
            </div>
            <BottomToolbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
