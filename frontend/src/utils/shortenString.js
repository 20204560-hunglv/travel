/**
 * Truncate string, default length = 45
 * @param {string} str 
 * @param {number} length 
 * @returns 
 */
export function truncateString(str, length = 45) {
  if (str && str.length > length) {
    return str.slice(0, length - 1) + "...";
  } else {
    return str;
  }
}
