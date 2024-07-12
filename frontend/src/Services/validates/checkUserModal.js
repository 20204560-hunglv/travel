import checkPhone from "../../utils/validators/Phone";
import { required } from "../../utils/validators/Required";
import checkPass from "./../../utils/validators/checkPass";
import checkEmail from "./../../utils/validators/Email";

export default function checkUserModal(fields) {
  const { numberPhone, ...values } = fields;
  Object.keys(values).forEach((key) => {
    required(fields[key]);
  });
  checkPass(fields["password"]);
  if (numberPhone.length > 0) {
    checkPhone(numberPhone);
  }
  const { email } = values;
  checkEmail(email);
}
