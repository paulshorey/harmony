export function average(values) {
  let sum = values.reduce((previous, current) => (current += previous));
  return sum / values.length;
}

export function mean(values) {
  values.sort((a, b) => a - b);
  let lowMiddle = Math.floor((values.length - 1) / 2);
  let highMiddle = Math.ceil((values.length - 1) / 2);
  return (values[lowMiddle] + values[highMiddle]) / 2;
}

export function is_number(variable) {
  if (variable === null) {
    return false;
  }
  if (typeof variable === "string") {
    variable = Number(variable);
  }
  if (isNaN(variable)) {
    return false;
  }
  return true;
}

/**
 * Round to the nearest integer, by increment: 1, 10, 100, 1000, etc.
 * @param increment - Default is 1. You can pass 10, 100, 1000, etc.
 */
export function round(num: number, increment: number = 1) {
  return Math.round(num / increment) * increment;
}
