import moment from "moment";

export function formatDate(time, format = "DD/MM/YYYY") {
  const inputTime = new Date(time);
  const result = moment(inputTime).format(format);
  return result;
}
