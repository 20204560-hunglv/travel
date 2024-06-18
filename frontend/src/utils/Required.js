/**
 * @description Validate required
 * @param {string} name
 * @param {string} pass
 * @return {*}
 */
export function required(field) {
  console.log({ field });
  if (!field) throw new Error("Cần điền đầy đủ thông tin");
}
