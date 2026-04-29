import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosSearch, IoMdMenu } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__logo-wrapper">
          <img src="/Union.png" alt="Lendsqr Logo" />
          <h1 className="topbar__logo">lendsqr</h1>
        </div>
        <div className="topbar__search">
          <input type="text" placeholder="Search for anything" />
          <span className="topbar__search-icon">
            <IoIosSearch size={16} />
          </span>
        </div>
      </div>

      <div className="topbar__right">
        <span className="docs-link">Docs</span>
        <span>
          <FaRegBell size={20} />
        </span>
        <div className="user">
          <div>
            <img src="/Image1.png" alt="User Avatar" className="avatar" />
          </div>
          <span style={{ fontSize: "14px" }}>Adedeji</span>
          <span>
            <IoMdArrowDropdown size={16} style={{ margin: "0" }} />
          </span>
        </div>
      </div>

      <div className="mobile-menu">
        <IoMdMenu size={30} />
      </div>
    </div>
  );
};

export default Topbar;
