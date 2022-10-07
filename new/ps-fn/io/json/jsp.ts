export default function jsp(val: string): string | number | boolean | null | undefined | Record<any, any> {
  try {
    return JSON.parse(val);
  } catch (e) {
    return undefined;
  }
}
