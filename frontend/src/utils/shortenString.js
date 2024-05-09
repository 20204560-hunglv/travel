export function truncateString(str, length = 45) {
  if (str && str.length > length) {
    return str.slice(0, 44) + "...";
  } else {
    return str;
  }
}
