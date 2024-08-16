import * as fabric from "fabric"; // v6
import { FabricImage } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCanvasStore, updateSelectedObject } from "../store/editorSlice";

function CanvasEditor() {
  const canvasEl = useRef(null);
  const canvasStore = useSelector(selectCanvasStore);
  const dispatch = useDispatch();
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
    el.on("selection:updated", ({ selected }) => {
      console.log(selected[0]?.fill);
      dispatch(updateSelectedObject(selected[0]));
      console.log("k");
    });
    el.on("selection:created", ({ selected }) => {
      console.log(selected[0]?.fill);
      dispatch(updateSelectedObject(selected[0]));
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
    // const fun = async () => {
    //   const x = await fabric.Image.fromURL(
    //     "https://i.imgur.com/tn6QBOD_d.webp?maxwidth=760&fidelity=grand"
    //   );
    //   x.scaleToWidth(50);
    //   el.add(x);
    // };
    // fun();

    // Add a rectangle
    // const rect = new fabric.Rect({
    //   left: 50,
    //   top: 50,
    //   fill: "red",
    //   width: 50,
    //   height: 50,
    // });

    // if (el) {
    //   el.add(rect);
    // }
    const editableText = new fabric.IText("Edit me!", {
      left: 100, // X position on the canvas
      top: 100, // Y position on the canvas
      fontFamily: "Arial", // Font family
      fontSize: 30, // Font size
      fill: "#000000", // Text color
      editable: true, // Make the text editable
    });

    // Add the editable text object to the canvas
    el.add(editableText);
    const firstObject = el.getObjects()[0];
    el.setActiveObject(firstObject);
    el.renderAll();
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
            const x = await FabricImage.fromURL(obj.options.url, obj.options);
            x.scaleToWidth(50);

            canvas.add(x);
          };
          fun();
        }
        if (obj.type === "svg" && obj.options.url) {
          const fun = async () => {
            try {
              const { objects, options } = await fabric.loadSVGFromURL(
                obj.options.url
              );

              // Filter out any null values
              console.log(objects, options);

              const filteredObjects = objects.filter((obj) => obj !== null);

              // Group the filtered SVG elements
              const svgData = fabric.util.groupSVGElements(
                filteredObjects,
                options
              );
              svgData.scaleToWidth(50);
              canvas.add(svgData);
              canvas.renderAll();
            } catch (error) {
              console.error("Error loading SVG:", error);
            }
          };
          fun(); // Call the async function
        }
      });
    }
  }, [canvasStore.objects]);
  useEffect(() => {
    console.log("useeffect", canvas?.getActiveObject());
    canvas?.getActiveObject()?.set("fill", canvasStore.fill);
    canvas?.renderAll();
  }, [canvasStore.fill]);
  const handleContextMenu = () => {
    console.log("handleContextMenu");
  };
  return (
    <div onContextMenu={handleContextMenu}>
      <canvas
        ref={canvasEl}
        style={{ border: "1px solid black", width: "350px", height: "350px" }}
      />
    </div>
  );
}

export default CanvasEditor;
