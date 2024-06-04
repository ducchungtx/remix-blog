/**
 * Checks if an object or array is empty.
 *
 * @param obj - The object or array to check.
 * @returns `true` if the object or array is empty, `false` otherwise.
 */
export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;
