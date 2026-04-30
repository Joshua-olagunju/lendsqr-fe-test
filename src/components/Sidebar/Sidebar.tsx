import { NavLink } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { sidebarData } from "../../data/sidebarData";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      {/* CLOSE BUTTON (mobile only) */}
      <button className="sidebar__close" onClick={onClose}>
        ✕
      </button>

      {/* Switch Org */}
      <div className="sidebar__switch-org">
        <FaBriefcase size={18} />
        <span>Switch Organization</span>
        <IoChevronDownSharp size={18} />
      </div>

      {/* Dashboard */}
      <NavLink to="/dashboard" className="sidebar__dashboard">
        <FiHome size={18} />
        <span>Dashboard</span>
      </NavLink>

      {/* Sections */}
      {sidebarData.map((section) => (
        <div className="sidebar__section" key={section.title}>
          <h3 className="sidebar__header">{section.title}</h3>

          <nav>
            {section.links.map((link) => {
              const Icon = link.icon;

              if (link.active) {
                return (
                  <NavLink to={link.path} key={link.name}>
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </NavLink>
                );
              }

              return (
                <div key={link.name} className="sidebar__disabled">
                  <Icon size={18} />
                  <span>{link.name}</span>
                </div>
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;