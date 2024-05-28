/**
 * @returns {JSON}
 */
export const getUserLocal = () => {
  const storedUserDataString = localStorage.getItem("userData");
  return JSON.parse(storedUserDataString);
};

/**
 *
 * @returns {JSON}
 */
export const getAdminLocal = () => {
  const storedUserDataString = localStorage.getItem("adminData");
  return JSON.parse(storedUserDataString);
};

/**
 * 
 * @param {*} key
 * @param {*} value
 * @return {void} 
 */
export const setLocalStorage = ({key, value}) => {
  localStorage.setItem(key, value);
};

/**
 * 
 * @param {String} key 
 * @return {void}
 */
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

