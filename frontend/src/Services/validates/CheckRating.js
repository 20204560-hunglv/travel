import { required } from "./../../utils/validators/Required";

export default function checkRating(rate, review) {
  required(rate);
  required(review, "nhận xét");
}
