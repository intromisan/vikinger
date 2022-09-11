import { FC, ReactNode } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface LayoutProps {
  children?: ReactNode[] | ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout_container">
      <Topbar />
      <Sidebar />
      <div className="layout_content">
        <div className="content-grid">{children}</div>
        <div
          style={{ width: "80px", backgroundColor: "white", height: "100%" }}
        >
          h
        </div>
      </div>
    </div>
  );
};

export default Layout;
