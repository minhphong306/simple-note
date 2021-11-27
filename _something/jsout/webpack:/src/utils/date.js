/**
 * Get unix time
 * @return {int}
 */
export const unix = date => {
  if (date) {
    return new Date(date).getTime();
  }
  return new Date().getTime();
};

/**
 * Return the start of a day for the given date.
 * @returns {number}
 */
export const startOfDay = () => {
  return new Date().setHours(0, 0, 0, 0);
};

/**
 * Return the end of a day for the given date.
 * @returns {number}
 */
export const endOfToday = () => {
  return new Date().setHours(23, 59, 59, 999);
};

/**
 * Add days
 * @param amount
 * @returns {number}
 */
export const addDays = amount => {
  const date = new Date();
  return date.setDate(date.getDate() + amount);
};

/**
 * Are the given dates in the same day?
 * @param first
 * @param second
 * @returns {boolean}
 */
export const isSameDay = (first, second) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};
