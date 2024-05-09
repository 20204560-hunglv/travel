const currencyVnd = (amout) => {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amout);
};

export default currencyVnd;
