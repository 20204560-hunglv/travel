import validator from "validator";

export default function checkEmail(email) {
  if (!validator.isEmail(email)) {
    throw new Error("Email chưa chính xác");
  }
}
