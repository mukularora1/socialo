import * as fabric from "fabric"; // v6
import { FabricImage } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCanvasStore,
  updateObjects,
  updateSelectedObject,
} from "../store/editorSlice";
import { getElementImpInfo } from "./canvas.utils";

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
      console.log(selected);
      const selectedElInfo = getElementImpInfo(selected[0]);
      if (selectedElInfo && selectedElInfo.id) {
        console.log(selectedElInfo);
      }
    });
    el.on("selection:created", ({ selected }) => {
      console.log(selected);
      canvas?.getActiveObject();
      const selectedElInfo = getElementImpInfo(selected[0]);
      dispatch(updateSelectedObject(selectedElInfo));
      console.log(selectedElInfo);
    });
    el.on("object:modified", (e) => {
      console.log("kp", e.target);
      console.log("l", el?.getActiveObject());

      const selectedElInfo = getElementImpInfo(e.target);
      console.log(selectedElInfo);
      dispatch(updateObjects(selectedElInfo));
    });
    el.on("object:added", (e) => {
      console.log(e.target.type);

      const selectedElInfo = getElementImpInfo(e.target);
      console.log(selectedElInfo);
      // canvasStore.objects.push(selectedElInfo);
      // el?.setActiveObject(el.getObjects()[el.getObjects().length - 1]);
    });
    // const editableText = new fabric.IText("Edit me!", {
    //   left: 100, // X position on the canvas
    //   top: 100, // Y position on the canvas
    //   fontFamily: "Arial", // Font family
    //   fontSize: 30, // Font size
    //   fill: "#000000", // Text color
    //   editable: true, // Make the text editable
    // });

    // // Add the editable text object to the canvas
    // el.add(editableText);
    // const firstObject = el.getObjects()[0];
    // el.setActiveObject(firstObject);
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
      console.log("1", canvasStore.objects);
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
        console.log(
          (obj.type === "svg" || obj.type === "path" || obj.type === "group") &&
            obj.url
        );

        if (
          (obj.type === "svg" || obj.type === "path" || obj.type === "group") &&
          obj.url
        ) {
          const fun = async () => {
            try {
              const { objects, options } = await fabric.loadSVGFromURL(obj.url);
              const filteredObjects = objects.filter((obj) => obj !== null);
              const svgData = fabric.util.groupSVGElements(
                filteredObjects,
                options
              );
              svgData.set({
                left: obj.left,
                top: obj.top,
                scaleX: obj.scaleX,
                scaleY: obj.scaleY,
                id: obj.id,
                url: obj.url,
                zoomX: 1,
                zoomY: 1,
                angle: obj.angle,
              });
              console.log(svgData);

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
