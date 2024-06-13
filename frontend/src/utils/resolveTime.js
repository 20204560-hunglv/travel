import moment from "moment";

/**
 * @param time
 * @param format
 * @returns {string}
 */
export function formatDate(time, format = "DD/MM/YYYY") {
  const inputTime = new Date(time);
  return moment(inputTime).format(format);
}

/**
 * 
 * @param {Date} a 
 * @param {Date} b 
 * @returns get the difference in milliseconds
 */
export const compareDate = (a, b) => {
  const dateA = moment(new Date(a));
  const dateB = moment(new Date(b));
  return dateA.diff(dateB);
};

