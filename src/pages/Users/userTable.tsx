import "../../styles/userTable.scss";
import "../../styles/actionBar.scss";
import { RiFilter3Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { users } from "../../data/user";
import { userTableHeaders } from "./userTableHeaders";
import { useState } from "react";
import ActionMenu from "../../utils/hooks/actionBar";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
const UsersTable = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [openUpward, setOpenUpward] = useState(false);
  const navigate = useNavigate();
  const handleMenu = (e: React.MouseEvent, id: number) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const spaceBelow = window.innerHeight - rect.bottom;

    // if not enough space below → open upward
    if (spaceBelow < 150) {
      setOpenUpward(true);
    } else {
      setOpenUpward(false);
    }

    setActiveRow(activeRow === id ? null : id);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalItems = users.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    const addPage = (p: number) => {
      if (!pages.includes(p)) pages.push(p);
    };

    const addDots = () => {
      if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    };

    const total = totalPages;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    addPage(1);

    if (currentPage > 3) {
      addDots();
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(total - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      addPage(i);
    }

    if (currentPage < total - 2) {
      addDots();
    }

    addPage(total);

    return pages;
  };
  const pages = getPageNumbers();

  return (
    <div className="table-card">
      <table className="users-table">
        <thead>
          <tr>
            {userTableHeaders.map((header) => (
              <th key={header.label}>
                <div className="th-content">
                  <span>{header.label}</span>
                  <RiFilter3Line size={16} />
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user: (typeof users)[number]) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td className="action_icon">
                <IoMdMore
                  size={20}
                  onClick={(e) => handleMenu(e, user.id)}
                  className="icon_menu"
                />

                {activeRow === user.id && (
                  <ActionMenu
                    direction={openUpward ? "up" : "down"}
                    user={user}
                    navigate={navigate}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {/* LEFT TEXT */}
        <div className="pagination__info">
          Showing {startIndex + 1}–{Math.min(endIndex, totalItems)} out of{" "}
          {totalItems}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="pagination__controls">
          {/* LEFT ARROW */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <IoChevronBack />
          </button>

          {/* PAGE NUMBERS */}
          {pages.map((page, index) =>
            page === "..." ? (
              <span key={index}>...</span>
            ) : (
              <button
                key={`${page}-${index}`}
                className={Number(currentPage) === Number(page) ? "active" : ""}
                onClick={() => setCurrentPage(Number(page))}
              >
                {page}
              </button>
            ),
          )}

          {/* RIGHT ARROW */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
