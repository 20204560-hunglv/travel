/**
 * 
 * @param {string} phone 
 */
export default function checkPhone(phone) {
  if (phone.length !== 10) throw new Error(`Số điện thoại chưa chính xác`);
}
