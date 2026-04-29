// src/data/sidebarData.ts
import {
  FiUsers,
  FiUser,
  FiBriefcase,
  FiDollarSign,
  FiCreditCard,
  FiCheckCircle,
  FiAlertCircle,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

export const sidebarData = [
  {
    title: "CUSTOMERS",
    links: [
      { name: "Users", path: "/users", icon: FiUsers ,active: true},
      { name: "Guarantors", path: "", icon: FiUser, disabled: true },
      { name: "Loans", path: "", icon: FiDollarSign, disabled: true },
      { name: "Decision Models", path: "", icon: FiBriefcase, disabled: true },
      { name: "Savings", path: "", icon: FiDollarSign, disabled: true },
      { name: "Loan Requests", path: "", icon: FiCreditCard, disabled: true },
      { name: "Whitelist", path: "", icon: FiCheckCircle, disabled: true },
      { name: "Karma", path: "", icon: FiAlertCircle, disabled: true },
    ],
  },
  {
    title: "BUSINESSES",
    links: [
      { name: "Organization", path: "", icon: FiBriefcase, disabled: true },
      { name: "Loan Products", path: "", icon: FiDollarSign, disabled: true },
      {
        name: "Savings Products",
        path: "",
        icon: FiDollarSign,
        disabled: true,
      },
      {
        name: "Fees and Charges",
        path: "",
        icon: FiDollarSign,
        disabled: true,
      },
      { name: "Transactions", path: "", icon: FiBarChart2, disabled: true },
      { name: "Services", path: "", icon: FiSettings, disabled: true },
      { name: "Service Account", path: "", icon: FiUser, disabled: true },
      { name: "Settlements", path: "", icon: FiBarChart2, disabled: true },
      { name: "Reports", path: "", icon: FiBarChart2, disabled: true },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        name: "Preferences",
        path: "",
        icon: FiSettings,
        disabled: true,
      },
      {
        name: "Fees and Pricing",
        path: "",
        icon: FiDollarSign,
        disabled: true,
      },
      {
        name: "Audit Logs",
        path: "",
        icon: FiBarChart2,
        disabled: true,
      },
    ],
  },
];
