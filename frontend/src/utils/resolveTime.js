import moment from "moment";

export function formatDate(time, format = "DD/MM/YYYY") {
  const inputTime = new Date(time);
  const result = moment(inputTime).format(format);
  return result;
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

