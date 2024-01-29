/**
 * Format a number by abbreviating it with 'k' or 'm' based on its magnitude.
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} - The formatted string.
 */
export const formatNumberStats = (number: number): string => {
  const million = 1000000;
  const thousand = 1000;

  const formatValue = (value: number, suffix: string): string =>
    (number / value).toFixed(1) + suffix;

  return number >= million
    ? formatValue(million, 'm')
    : number >= thousand
      ? formatValue(thousand, 'k')
      : number.toString();
}
