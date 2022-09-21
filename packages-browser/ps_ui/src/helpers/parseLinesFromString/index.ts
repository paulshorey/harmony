/**
 * Format a string with \n (new line) to be displayed as paragraphs.
 * @returns an array of string to be mapped to proper html element
 */
export const parseLinesFromString = (str: string): string[] => {
  return (
    str
      /** Remove new lines */
      .split('\n')
      /** Don't leave spaces at the end of paragraphs */
      .map((i) => i.trim())
      /** Filter spaces, hidden spaces, and undefined */
      .filter((i) => i && i !== ' ' && i !== ' ')
  );
};
