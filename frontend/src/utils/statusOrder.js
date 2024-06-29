/**
 *
 * @param {string} status
 * @returns {string}
 */
export const getStatusOrder = (status = "Pending") => {
  if (status === "Confirmed") return "Đã xác nhận";
  if (status === "Pending") return "Đang chờ";
  if (status === "Cancelled") return "Đã hủy";
  if (status === "Done") return "Hoàn thành";
};
