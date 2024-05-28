/**
 * @param {number} amount 
 * @returns string
 */
const currencyVnd = (amount) => {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

export default currencyVnd;
