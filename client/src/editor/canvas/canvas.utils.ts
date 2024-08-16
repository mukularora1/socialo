import * as fabric from "fabric";
const getElementImpInfo = (el: fabric.Object) => {
  if (el) {
    const elementInfo = {
      id: Math.ceil(Math.random() * 10000),
      width: el.width,
      height: el.height,
      top: el.top,
      left: el.left,
      angle: el.left,
      fill: el.fill,
      flipX: el.flipX,
      flipY: el.flipY,
      lockMovementX: el.lockMovementX,
      lockMovementY: el.lockMovementY,
      lockRotation: el.lockRotation,
      lockScalingX: el.lockScalingX,
      lockScalingY: el.lockScalingY,
      opacity: el.opacity,
      scaleX: el.scaleX,
      scaleY: el.scaleY,
      type: el.type,
    };
    return elementInfo;
  }
  return null;
};
export { getElementImpInfo };
