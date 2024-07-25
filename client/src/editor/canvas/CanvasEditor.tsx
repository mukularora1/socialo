import * as fabric from "fabric"; // v6
import { useEffect, useRef } from "react";

function CanvasEditor() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasEl.current) return;
    const options = {
      backgroundColor: "lightgray",
      selection: true,
      hoverCursor: "pointer",
      width: 500,
      height: 500,
      isDrawingMode: true,
      preserveObjectStacking: true,
    };
    const canvas = new fabric.Canvas(canvasEl.current, options);
    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas);
    return () => {
      // updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);

  return (
    <canvas
      width="300"
      height="300"
      ref={canvasEl}
      style={{ border: "1px solid black" }}
    />
  );
}

export default CanvasEditor;
