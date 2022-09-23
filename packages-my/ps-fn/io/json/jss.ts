export default function jss(val: any): string {
  try {
    return JSON.stringify(val);
  } catch (e) {
    return undefined;
  }
}
