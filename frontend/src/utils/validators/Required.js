/**
 * @description Validate required
 * @param {string} name
 * @param {string} pass
 * @return {*}
 */
export function required(field, title = "") {
  if (!field) throw new Error(`Cần điền đầy đủ thông tin ${title}`);
}
