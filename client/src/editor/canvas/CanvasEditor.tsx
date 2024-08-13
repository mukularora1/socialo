import * as fabric from "fabric"; // v6
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCanvasStore } from "../store/editorSlice";
function CanvasEditor() {
  const canvasEl = useRef(null);
  const canvasStore = useSelector(selectCanvasStore);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  useEffect(() => {
    if (!canvasEl.current) {
      console.error("Canvas element not found");
      return;
    }

    // Initialize fabric.Canvas
    const el = new fabric.Canvas(canvasEl.current, {
      backgroundColor: "white",
      selection: true,
      hoverCursor: "pointer",
      width: 350,
      height: 350,
      preserveObjectStacking: true,
    });
    el.on("selection:updated", () => {
      console.log("k");
    });
    el.on("object:modified", (e) => {
      console.log("kp", e.target);
    });
    el.on("object:added", (e) => {
      console.log("Object added:", e.target);
      console.log("Object type:", e.target.type); // Type of the object
      console.log("Object properties:", e.target.toObject());
    });

    // Function to load an image and add it to the canvas
    const fun = async () => {
      const x = await fabric.Image.fromURL(
        "https://i.imgur.com/tn6QBOD_d.webp?maxwidth=760&fidelity=grand"
      );
      x.scaleToWidth(50);
      el.add(x);
    };
    fun();

    // Add a rectangle
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: "red",
      width: 50,
      height: 50,
    });

    if (el) {
      el.add(rect);
    }
    setCanvas(el);
    return () => {
      if (el) {
        el.dispose(); // Clean up the canvas
      }
    };
  }, []);
  useEffect(() => {
    if (canvasEl.current && canvas) {
      canvas.clear();
      canvas.backgroundColor = "white"; // Set to your desired color
      canvas.renderAll();
      // Add objects from Redux store to canvas
      canvasStore.objects.forEach((obj) => {
        if (obj.type === "Image" && obj.options.url) {
          const fun = async () => {
            const x = await fabric.Image.fromURL(obj.options.url, obj.options);
            x.scaleToWidth(50);

            canvas.add(x);
          };
          fun();
          // loadImage(obj.options.url, obj.options);
        } else {
          // Handle other types of objects if needed
          console.warn(`Unknown object type: ${obj.type}`);
        }
      });
    }
  }, [canvasStore.objects]);
  return (
    <div>
      <canvas
        ref={canvasEl}
        style={{ border: "1px solid black", width: "350px", height: "350px" }}
      />
    </div>
  );
}

export default CanvasEditor;
