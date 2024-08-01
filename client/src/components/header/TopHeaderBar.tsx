import { ReactNode } from "react";
import "./topHeaderBar.css";
function TopHeaderBar({
  children,
  height = "auto",
  className = "",
}: {
  children: ReactNode;
  height?: string;
  className?: string;
}) {
  return (
    <header
      className={`top-header-bar__header-wrapper ${className}`}
      style={{ height }}>
      {children}
    </header>
  );
}

export default TopHeaderBar;
