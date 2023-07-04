/**
 *
 * @param func any function the needs debouncing
 * @param timeout timeout in milliseconds
 * @returns A debounced version of the function with same arguments
 *
 * The returned function will work as normal every <timeout> milliseconds and will return undefined if called too soon
 */
export const debounce = <T, U extends unknown[]>(
  func: (...args: U) => T,
  timeout: number,
): (...args: U) => T | undefined => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const returnFunc = (...args: U): T | undefined => {
    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;
      }, timeout);

      return func(...args);
    }

    return undefined;
  };

  return returnFunc;
};
