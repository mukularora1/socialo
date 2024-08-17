import * as fabric from "fabric";
const getElementImpInfo = (el: fabric.Object) => {
  if (el) {
    const elementInfo = {
      id: el.id || Math.ceil(Math.random() * 10000),
      width: el.width || 50,
      height: el.height || 50,
      top: el.top || 0,
      left: el.left || 0,
      angle: el.angle || 0,
      fill: el.fill,
      flipX: el.flipX,
      flipY: el.flipY,
      lockMovementX: el.lockMovementX,
      lockMovementY: el.lockMovementY,
      lockRotation: el.lockRotation,
      lockScalingX: el.lockScalingX,
      lockScalingY: el.lockScalingY,
      opacity: el.opacity || 1,
      scaleX: el.scaleX || 1,
      scaleY: el.scaleY || 1,
      type: el.type,
      url: el.url,
    };
    return elementInfo;
  }
  return null;
};
export { getElementImpInfo };
