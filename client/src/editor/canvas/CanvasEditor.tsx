import * as fabric from "fabric"; // v6
import { useEffect, useRef } from "react";

function CanvasEditor() {
  const canvasEl = useRef(null);

  useEffect(() => {
    if (!canvasEl.current) {
      console.error("Canvas element not found");
      return;
    }

    const options = {
      backgroundColor: "white",
      selection: true,
      hoverCursor: "pointer",
      width: 400,
      height: 400,
      preserveObjectStacking: true,
    };

    const canvas = new fabric.Canvas(canvasEl.current, options);
    // canvas.isDrawingMode = true; // Explicitly set drawing mode

    // Add a test object to verify rendering
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: "red",
      width: 50,
      height: 50,
    });
    canvas.add(rect);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasEl}
        style={{ border: "1px solid black", width: "400px", height: "400px" }}
      />
    </div>
  );
}

export default CanvasEditor;
