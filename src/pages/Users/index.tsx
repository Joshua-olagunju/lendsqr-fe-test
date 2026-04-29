import "../../styles/user.scss";
import UserDashboardCards from "../Users/userDashboardCards";
import UsersTable from "../Users/userTable";

const User = () => {
  return (
    <div className="user">
      <h1 className="user__title">Users</h1>
      <UserDashboardCards />
      <UsersTable />
    </div>
  );
};

export default User;
