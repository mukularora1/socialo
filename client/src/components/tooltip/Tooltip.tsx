import { ReactNode, useCallback, useRef, useState } from "react";
import { debounce } from "../../utils/debouncing";
import "./tooltip.css";

type TooltipPosition = "top" | "left" | "right" | "bottom";

interface TooltipProps {
  children: ReactNode;
  position?: TooltipPosition;
  title: string;
}

function Tooltip({ children, position = "top", title = "" }: TooltipProps) {
  const [tooltipStyle, setTooltipStyle] = useState({
    display: "none",
    top: 0,
    left: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipShow = useCallback(
    debounce(() => {
      if (contentRef.current) {
        const { top, left, width, height } =
          contentRef.current.getBoundingClientRect();
        switch (position) {
          case "top":
            setTooltipStyle({
              display: "block",
              top: top - 30, // Adjust as needed
              left: left + width / 2, // Center the tooltip horizontally
            });
            break;
          case "bottom":
            setTooltipStyle({
              display: "block",
              top: top + height + 10, // Adjust as needed
              left: left + width / 2, // Center the tooltip horizontally
            });
            break;
          case "left":
            setTooltipStyle({
              display: "block",
              top: top + height / 2, // Center the tooltip vertically
              left: left - 120, // Adjust as needed
            });
            break;
          case "right":
            setTooltipStyle({
              display: "block",
              top: top + height / 2, // Center the tooltip vertically
              left: left + width + 10, // Adjust as needed
            });
            break;
          default:
            break;
        }
        setShowTooltip(true);
      }
    }, 100), // Adjust the debounce delay as needed
    [position]
  );

  const handleTooltipHide = useCallback(
    debounce(() => {
      setTooltipStyle((pre) => ({ ...pre, display: "none" }));
      setShowTooltip(false);
    }, 200), // Adjust the debounce delay as needed
    []
  );

  return (
    <div className="tooltip">
      {showTooltip && (
        <div
          className="tooltip__hover-content"
          style={{ ...tooltipStyle, position: "absolute" }}>
          {title}
        </div>
      )}
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
