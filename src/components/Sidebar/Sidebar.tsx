import { NavLink } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { sidebarData } from "../../data/sidebarData";
// ===============================================================================
//    Sidebar component that renders navigation links based on the provided sidebar data
// ===============================================================================
const Sidebar = () => {
  return (
    <div className="sidebar">
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

              // if it's active → allow navigation
              if (link.active) {
                return (
                  <NavLink to={link.path} key={link.name}>
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </NavLink>
                );
              }

              // if not active → just render as disabled
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
