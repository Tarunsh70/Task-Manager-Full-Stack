export const isAdmin = (user) => {
  return user?.role === "Admin";
};

export const isMember = (user) => {
  return user?.role === "Member";
};