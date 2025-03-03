import { required } from "../../utils/validators/Required";

export default function checkTourModal(fields) {
  Object.keys(fields).forEach((key) => {
    required(fields[key]);
  });
}
