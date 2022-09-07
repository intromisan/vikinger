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
      <div className="layout_content">{children}</div>
    </div>
  );
};

export default Layout;
