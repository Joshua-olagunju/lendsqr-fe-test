const UserDetails = () => {
  const storedUser = localStorage.getItem("selectedUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.organization}</p>
      <p>{user.status}</p>
    </div>
  );
};

export default UserDetails;
