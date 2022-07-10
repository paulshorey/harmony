/**
 * Async helper function used to await state changes in a test.
 * @param timeInMilliseconds - The time to async delay
 */
const delay = async (timeInMilliseconds = 0): Promise<undefined> => {
  return await new Promise((resolve) =>
    setTimeout(resolve, timeInMilliseconds)
  );
};

export default delay;
