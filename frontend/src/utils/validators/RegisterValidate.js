import validator from "validator";

/**
 *
 * @param name
 * @param pass
 * @param newPass
 * @param email
 * @constructor
 */
export const RegisterValidate = ({ name, pass, newPass, email }) => {
  if (!name || !pass || !newPass || !email)
    throw new Error("Cần nhập đầy đủ thông tin");
  if (pass.length < 8) throw new Error("Mật khẩu phải ít nhất 8 ký tự");
  if (newPass !== pass) throw new Error("Mật khẩu không giống nhau");
  if (!validator.isEmail(email)) {
    throw new Error("Email chưa chính xác");
  }
};
