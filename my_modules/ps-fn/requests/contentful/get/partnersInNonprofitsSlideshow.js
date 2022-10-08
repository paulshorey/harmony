import decodeEntriesToStrings from 'src/fetch/contentful/lib/decodeEntriesToStrings';
import getEntryById from 'src/fetch/contentful/api/getEntryById';

/**
 * Get a list of partner objects to use in the big slideshow at the top of spiral.us/nonprofits, sorted by drag/drop order
 */
export default async () => {
  let collection = await getEntryById('3EliEtA6Yc0BBkFuoR2Jd9');
  return decodeEntriesToStrings(collection.fields.partners);
};
