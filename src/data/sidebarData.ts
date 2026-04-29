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
      { name: "Users", path: "/users", icon: FiUsers },
      { name: "Guarantors", path: "/guarantors", icon: FiUser },
      { name: "Loans", path: "/loans", icon: FiDollarSign },
      { name: "Decision Models", path: "/decision-models", icon: FiBriefcase },
      { name: "Savings", path: "/savings", icon: FiDollarSign },
      { name: "Loan Requests", path: "/loan-requests", icon: FiCreditCard },
      { name: "Whitelist", path: "/whitelist", icon: FiCheckCircle },
      { name: "Karma", path: "/karma", icon: FiAlertCircle },
    ],
  },
  {
    title: "BUSINESSES",
    links: [
      { name: "Organization", path: "/organization", icon: FiBriefcase },
      { name: "Loan Products", path: "/loan-products", icon: FiDollarSign },
      {
        name: "Savings Products",
        path: "/savings-products",
        icon: FiDollarSign,
      },
      { name: "Fees and Charges", path: "/fees-charges", icon: FiDollarSign },
      { name: "Transactions", path: "/transactions", icon: FiBarChart2 },
      { name: "Services", path: "/services", icon: FiSettings },
      { name: "Service Account", path: "/service-account", icon: FiUser },
      { name: "Settlements", path: "/settlements", icon: FiBarChart2 },
      { name: "Reports", path: "/reports", icon: FiBarChart2 },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      { name: "Preferences", path: "/preferences", icon: FiSettings },
      { name: "Fees and Pricing", path: "/fees-pricing", icon: FiDollarSign },
      { name: "Audit Logs", path: "/audit-logs", icon: FiBarChart2 },
    ],
  },
];
