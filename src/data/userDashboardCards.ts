import { FiUsers } from "react-icons/fi";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbFileBitcoin } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

// ===============================================================================
//   Data for the user dashboard cards, including title, value, icon, and styling
// ===============================================================================
export const userDashboardCards = [
  {
    title: "Users",
    value: "2,453",
    icon: FiUsers,
    bgColor: "#DF18FF",
    iconColor: "#DF18FF",
  },
  {
    title: "Active Users",
    value: "2,453",
    icon: HiOutlineUserGroup,
    bgColor: "#E8F5FF",
    iconColor: "#5718FF",
  },
  {
    title: "Users with Loans",
    value: "12,453",
    icon: TbFileBitcoin,
    bgColor: "#F55F44",
    iconColor: "#F55F44",
  },
  {
    title: "Users with Savings",
    value: "102,453",
    icon: LiaCoinsSolid,
    bgColor: "#FFE8F0",
    iconColor: "#FF3366",
  },
];
