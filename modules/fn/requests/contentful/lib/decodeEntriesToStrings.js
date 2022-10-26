import decodeEntryToStrings from './decodeEntryToStrings';
/**
 * Needs documentation
 */
export default function (entries) {
  let items = [];
  if (!entries || !entries.length) {
    return items;
  }
  for (let entry of entries) {
    let item = decodeEntryToStrings(entry);
    items.push(item);
  }
  return items;
}
