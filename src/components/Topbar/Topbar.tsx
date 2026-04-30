import { FaRegBell } from "react-icons/fa";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
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
            <TiArrowSortedDown size={16} className="header_arrow" />
          </span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="mobile-menu" onClick={onMenuClick}>
        <IoMdMenu size={30} />
      </div>
    </div>
  );
};

export default Topbar;