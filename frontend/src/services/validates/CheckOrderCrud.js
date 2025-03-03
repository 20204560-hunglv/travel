import { required } from "../../utils/validators/Required";
import checkPhone from "../../utils/validators/Phone";
import checkEmail from "../../utils/validators/Email";

export default function checkOrderCrud({
  fullName,
  email,
  phone,
  createdDate,
  status,
  adultCount,
  childrenCount,
  kidCount,
}) {
  required(fullName, "Họ và tên");
  required(email, "Email");
  checkEmail(email);
  required(phone, "Số điện thoại");
  checkPhone(phone);
  required(createdDate, "Ngày đặt");
  required(status, "Trạng thái");
  if (!parseInt(adultCount) && !parseInt(childrenCount) && !parseInt(kidCount))
    throw new Error(`Hãy chọn số người du lịch`);
}
