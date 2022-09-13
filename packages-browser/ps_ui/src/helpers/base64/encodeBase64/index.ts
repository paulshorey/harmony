export const encodeBase64 = (str: string) => {
  try {
    return Buffer.from(str).toString('base64');
  } catch {
    return '';
  }
};
