export const decodeBase64 = (str: string) => {
  try {
    return Buffer.from(str, 'base64').toString('ascii');
  } catch {
    return '';
  }
};
