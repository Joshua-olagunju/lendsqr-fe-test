export const users = Array.from({ length: 500 }, (_, index) => {
  const statuses = ["Active", "Pending", "Blacklisted", "Inactive"];

  const orgs = ["Lendsqr", "Interswitch", "Flutterwave", "Opay"];

  return {
    id: index + 1,
    organization: orgs[index % orgs.length],
    username: `user${index + 1}`,
    email: `user${index + 1}@mail.com`,
    phone: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
    dateJoined: new Date(
      2023,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    ).toLocaleDateString(),
    status: statuses[index % statuses.length],
  };
});
