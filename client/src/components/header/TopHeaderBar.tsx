import { ReactNode } from "react";
import "./topHeaderBar.css";
function TopHeaderBar({
  children,
  height = "auto",
}: {
  children: ReactNode;
  height?: string;
}) {
  return (
    <header className="top-header-bar__header-wrapper" style={{ height }}>
      {children}
    </header>
  );
}

export default TopHeaderBar;
