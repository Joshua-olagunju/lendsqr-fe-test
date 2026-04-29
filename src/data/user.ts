export const users = Array.from({ length: 500 }, (_, index) => {
  const statuses = ["Active", "Pending", "Blacklisted", "Inactive"];

  const orgs = ["Lendsqr", "Interswitch", "Flutterwave", "Opay"];
  // =================================
  // Function to generate random user data for testing purposes
  //==================================
  return {
    id: index + 1,
    organization: orgs[index % orgs.length],
    username: `Customer${index + 1}`,
    email: `Customer${index + 1}@mail.com`,
    phone: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
    dateJoined: new Date(
      2023,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
    ).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    status: statuses[index % statuses.length],
  };
});
