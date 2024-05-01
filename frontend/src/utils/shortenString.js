export function shorten45Chart(value) {
  let newValue = value;
  if (newValue.length > 45) {
    newValue = newValue.slice(0, 44);
  }
  return newValue;
}
