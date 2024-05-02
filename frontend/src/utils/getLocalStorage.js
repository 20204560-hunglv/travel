const getUserLocal = () => {
  const storedUserDataString = localStorage.getItem("userData");
  return JSON.parse(storedUserDataString);
};
const getAdminLocal = () => {
  const storedUserDataString = localStorage.getItem("adminData");
  return JSON.parse(storedUserDataString);
};
export { getUserLocal, getAdminLocal };
