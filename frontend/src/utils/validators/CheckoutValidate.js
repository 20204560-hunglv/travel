import { required } from "./Required";

/**
 * @description Validate login input
 * @param {string} name
 * @param {string} pass
 * @return {*}
 */
export default function checkoutValidate({
  fullName,
  email,
  phone,
  slotStill,
}) {
  if (slotStill <= 0) throw new Error("Tour đã hết chỗ!");
  required(fullName);
  required(email);
  required(phone);
}
