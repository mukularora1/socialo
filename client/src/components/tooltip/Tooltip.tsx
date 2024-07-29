import { ReactNode, useRef, useState } from "react";
import "./tooltip.css";

type TooltipPosition = "top" | "left" | "right" | "bottom";
function Tooltip({
  children,
  position = "top",
  left = 0,
  top = 0,
}: {
  children: ReactNode;
  position?: TooltipPosition;
  left?: number;
  top?: number;
}) {
  const [tooltipStyle, setTooltipStyle] = useState({
    display: "none",
    top: 0,
    left: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTooltipShow = () => {
    if (contentRef.current) {
      const { top, left, width } = contentRef.current.getBoundingClientRect();
      console.log(width);

      setTooltipStyle({
        display: "block",
        top: top - 30, // Adjust the top position as needed
        left: left, // Center the tooltip horizontally
      });
    }
  };

  const handleTooltipHide = () => {
    setTooltipStyle((pre) => ({ ...pre, display: "none" }));
  };

  return (
    <div className="tooltip">
      <div
        className="tooltip__hover-content"
        style={{ ...tooltipStyle, position: "absolute" }}>
        hello
      </div>
      <div
        className="tooltip__content"
        ref={contentRef}
        onMouseOver={handleTooltipShow}
        onMouseLeave={handleTooltipHide}>
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
