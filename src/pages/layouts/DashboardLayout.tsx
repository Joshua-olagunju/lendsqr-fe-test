import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import "../../styles/sidebar.scss";
import "../../styles/topbar.scss";

const DashboardLayout = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Topbar />
      <Sidebar />

      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
