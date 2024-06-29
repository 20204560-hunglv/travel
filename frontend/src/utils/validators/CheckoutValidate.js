import {required} from "./Required";

/**
 * @description Validate login input
 * @param {string} name
 * @param {string} pass
 * @return {*}
 */
export default function checkoutValidate({ fullName, email, phone }) {
  required(fullName);
  required(email);
  required(phone);
}
