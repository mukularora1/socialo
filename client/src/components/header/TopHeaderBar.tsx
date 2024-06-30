import { ReactNode } from "react";
import "./topHeaderBar.css";
function TopHeaderBar({ children }: { children: ReactNode }) {
  return <header className="top-header-bar__header-wrapper">{children}</header>;
}

export default TopHeaderBar;
