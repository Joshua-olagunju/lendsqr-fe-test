import { FiEye, FiUserX, FiUserCheck } from "react-icons/fi";

interface Props {
  direction?: "up" | "down";
  user: {
    id: number;
    organization: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: string;
  };
  navigate: (path: string) => void;
}

const ActionMenu = ({ direction = "down", user, navigate }: Props) => {
  const actions = [
    {
      label: "View Details",
      icon: FiEye,
      onClick: () => {
        localStorage.setItem("selectedUser", JSON.stringify(user));
        navigate(`/users/${user.id}`);
      },
    },
    {
      label: "Blacklist User",
      icon: FiUserX,
      onClick: () => {
        alert("User blacklisted (mock action)");
      },
    },
    {
      label: "Activate User",
      icon: FiUserCheck,
      onClick: () => {
        alert("User activated (mock action)");
      },
    },
  ];

  return (
    <div className={`action-menu ${direction}`}>
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <div
            key={action.label}
            className="action-menu__item"
            onClick={action.onClick}
          >
            <Icon size={16} />
            <span>{action.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ActionMenu;
