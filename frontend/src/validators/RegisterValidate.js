/**
 *
 * @param name
 * @param pass
 * @param newPass
 * @constructor
 */
export const RegisterValidate = ({ name, pass, newPass }) => {
  if (!name || !pass || !newPass) throw new Error("Cần nhập đầy đủ thông tin");
  if (pass.length < 8) throw new Error("Mật khẩu phải ít nhất 8 ký tự");
  if (newPass !== pass) throw new Error("Mật khẩu không giống nhau");
};
