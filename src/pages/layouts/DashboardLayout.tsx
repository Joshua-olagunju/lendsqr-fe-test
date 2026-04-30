import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import "../../styles/sidebar.scss";
import "../../styles/topbar.scss";

const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* TOPBAR */}
      <Topbar onMenuClick={() => setOpenSidebar(true)} />

      {/* OVERLAY */}
      {openSidebar && (
        <div className="overlay" onClick={() => setOpenSidebar(false)} />
      )}

      {/* SIDEBAR */}
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />

      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
